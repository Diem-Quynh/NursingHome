const BaseController = require("./BaseController")
const UserModel = require("@app/Models/User")
const UserGroupModel = require("@app/Models/UserGroup")
const DoctorAssignmentModel = require("@app/Models/DoctorAssignment")
const NurseAssignmentModel = require("@root/app/Models/NurseAssignment")
const HealthStatusModel = require("@app/Models/HealthStatus")
const ApiException = require("@app/Exceptions/ApiException");
const Auth = require('@core/Auth');
const authConfig = require('@config/auth')
const _ = require('lodash')
class UserController extends BaseController {
  constructor() {
    super()
    this.Model = UserModel;
    this.UserGroupModel = UserGroupModel;
    this.DoctorAssignmentModel = DoctorAssignmentModel;
    this.NurseAssignmentModel = NurseAssignmentModel;
    this.HealthStatusModel = HealthStatusModel;
  }

  async index() {
    const inputs = this.request.all();
    const select = ['users.*', 'user_groups.name as groupName'];
    let result = await this.Model.query()
      .select(select)
      .leftJoin('user_groups', {
        'users.groupId': 'user_groups.id'
      }).getForGridTable(inputs);
    for (let i in Object.keys(result['data'])) {
      delete result['data'][i]['password'];
      delete result['data'][i]['token'];
    }
    return result;
  }

  async detail() {
    let params = this.request.all()
    let id = params.id
    if (!id) throw new ApiException(9996, "ID is required!");
    let result = await this.Model.findById(id);
    if (!result) {
      throw new ApiException(7004, 'Data not found')
    }
    delete result['password'];
    delete result['token'];
    return result
  }

  async login() {
    const inputs = this.request.all();
    const allowFields = {
      username: "string!",
      password: "string!"
    }

    const data = this.validate(inputs, allowFields);
    let user = await this.Model.checkLogin({
      username: data.username,
      password: data.password
    })
    if (!user) {
      throw new ApiException(7000, "Can not login")
    }

    // const permissions = { 'root': 15 }
    let permissions = {}
    await this.Model.getPermissions(user.groupId).then(per => {
      per.forEach((item,index) => {
        permissions[item.permissionKey] = item.value
      })
    }).catch(err => {
      console.log(err)
      return this.response.status(500).json({error: err})
    })
    let token = Auth.generateJWT({
      id: user.id,
      username: user.username,
      groups: user.groupId,
      permissions: permissions,
      type: "user"
    }, {
      key: authConfig['SECRET_KEY'],
      expiresIn: authConfig['JWT_EXPIRE_USER']
    });

    this.response.success({
      token,
      user: { 
        ...user,
        permissions
      }
    })
  }

  async checkDataExist(key, data) {
    let check = await this.Model.findOne(key, data)
    if (check) {
      throw new ApiException(7002, `${key} already exists!`);
    }
  }

  async checkDataUpdate(key, data, id) {
    let check = await this.Model.findOne(key, data)
    if (check && check.id != id) {
      throw new ApiException(7002, `${key} already exists!`);
    }
  }

  async checkGroup(groupId, userPermission) {
    const check = await this.UserGroupModel.findById(groupId)
    if (!check) {
        throw new ApiException(7004, "User group not exists!");
    }
    if (!userPermission['root'] && check.name == 'root')
      throw new ApiException(7008, "You don't have permission to add user root!");
  }

  async checkUpdateRoot(groupId, userPermission) {
    const check = await this.UserGroupModel.findById(groupId)
    if (!userPermission['root'] && check.name == 'root')
      throw new ApiException(7008, "You don't have permission to update information of user root!");
  }

  async store() {
    let inputs = this.request.all()
    const allowFields = {
      code: 'string!',
      fullname: "string!",
      position: "string!",
      birthday: 'date',
      gender: 'number',
      address: 'string',
      cardId: 'string',
      email: "string",
      phone: "string",
      username: "string",
      password: "string",
      groupId: "number"
    }
    let data = this.validate(inputs, allowFields, {
      removeNotAllow: true
    });

    // Cắt bỏ khoảng trắng
    data.code = data.code.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    await this.checkDataExist('code', data.code)

    if (_.has(data, 'username')){
      data.username = data.username.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
      await this.checkDataExist('username', data.username)
      data.password = await this.Model.hash(data.password);
      // tạo chuỗi kí tự ngẫu nhiên gồm 10 ký tự
      data['token'] = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
    }

    if (_.has(data, 'groupId')) {
      const userPermission = this.request.auth.permissions || {}
      await this.checkGroup(data.groupId, userPermission)
    }
    
    let result = await this.Model.query().insert(data);
    delete result['password']
    return result
  }

  async userUpdatePassword() {
    let inputs = this.request.all()
    const allowFields = {
      oldPassword: "string!",
      password: "string!"
    }
    let data = this.validate(inputs, allowFields, {
      removeNotAllow: true
    });
    let user = await this.Model.findById(inputs.id);
    let checkPassword = await this.Model.compare(data.oldPassword, user.password);
    if(!checkPassword) throw new ApiException(7003, "Old password is incorrect!")
    let result = await this.Model.changePassword(inputs.id, data['password']);
    delete result['password']
    return result
  }

  async updatePassword() {
    let inputs = this.request.all()

    const allowFields = {
      password: "string!"
    }
    let data = this.validate(inputs, allowFields, {
      removeNotAllow: true
    });
    const exist = await this.Model.findById(inputs.id);
    if (!exist) {
      throw new ApiException(7004, "User does not exist!")
    }
    if(!exist.username) throw new ApiException(7004, "User does not account!")
    if(exist.groupId) {
      const group = await this.UserGroupModel.findById(exist.groupId)
      const userPermission = this.request.auth.permissions || {}
      if (!userPermission['root'] && group.name == 'root')
        throw new ApiException(7008, "You don't have permission to change password of user root!");
    }
    let result = await this.Model.changePassword(inputs.id, data['password']);
    delete result['password']
    return result
  }

  async update() {
    let inputs = this.request.all()
    const allowFields = {
      code: 'string!',
      fullname: "string!",
      position: "string!",
      birthday: 'date',
      gender: 'number',
      address: 'string',
      cardId: 'string',
      email: "string",
      phone: "string",
      username: "string",
      groupId: "number"
    }
    let data = this.validate(inputs, allowFields, {
      removeNotAllow: true
    })

    let exist = await this.Model.findById(inputs.id)
    if (!exist) {
      throw new ApiException(7004, "User does not exist!")
    }

    const userPermission = this.request.auth.permissions || {}
    if(exist.groupId) await this.checkUpdateRoot(exist.groupId, userPermission)

    data.code = data.code.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    await this.checkDataUpdate('code', data.code, inputs.id)

    if (_.has(data, 'username')){
      data.username = data.username.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
      await this.checkDataUpdate('username', data.username, inputs.id)
    }

    if (_.has(data, 'groupId')) {
      await this.checkGroup(data.groupId, userPermission)
    }

    let result = await exist.patch(data);
    delete result['password'];
    return result;
  }

  async destroy() {
    const inputs = this.request.all();
    if (!inputs.id) throw new ApiException(9996, "ID is required!");
    const allowFields = {
        id: "number!"
    }
    let params = this.validate(inputs, allowFields);

    let checkRoot =  await this.Model.checkGroupRoot([params.id])
    if(!_.isEmpty(checkRoot)) throw new ApiException(7008, "Root user cannot be deleted!")

    let checkDoctor = await this.DoctorAssignmentModel.findOne('doctorId', params.id)
    if (checkDoctor) {
        throw new ApiException(7007, "Assigned Doctor cannot be deleted!")
    }

    let checkNurse = await this.NurseAssignmentModel.findOne({ 'nurseId': params.id });
    if (checkNurse) {
        throw new ApiException(7007, "Assigned nurse cannot be deleted!")
    }

    let checkHealth = await this.HealthStatusModel.findOne({ 'doctorId': params.id });
    if (checkHealth) {
        throw new ApiException(7007, "Constraint health data cannot be deleted!")
    }

    await this.Model.query().deleteById(params.id);
    return {
        "message": "Delete success!"
    }
  }

  async delete() {
    const inputs = this.request.all();
    if (_.isEmpty(inputs.ids) || !Array.isArray(inputs.ids)) 
        throw new ApiException(9996, "ID is required. Expected: Array!");

    const allowFields = {
        ids: ["number!"]
    }
    let params = this.validate(inputs, allowFields);

    
    let checkRoot =  await this.Model.checkGroupRoot(params.ids)
    if(!_.isEmpty(checkRoot)) throw new ApiException(7008, "Root user cannot be deleted!")
    
    let checkDoctor = await this.DoctorAssignmentModel.query().whereIn( 'doctorId', params.ids );
    if (!_.isEmpty(checkDoctor)) {
        throw new ApiException(7007, "Assigned doctor cannot be deleted!")
    }
    
    let checkNurse = await this.NurseAssignmentModel.query().whereIn( 'nurseId', params.ids );
    if (!_.isEmpty(checkNurse)) {
        throw new ApiException(7007, "Assigned nurse cannot be deleted!")
    }
    
    let checkHealth = await this.HealthStatusModel.query().whereIn( 'doctorId', params.ids );
    if (!_.isEmpty(checkHealth)) {
        throw new ApiException(7007, "Constraint health data cannot be deleted!")
    }

    await this.Model.query().delete().whereIn('id',params.ids);
    return {
        "message": "Delete success!"
    }
  }

  async search() {
    const inputs = this.request.all();
    const allowFields = {
      keyword: "string!"
    }

    const data = this.validate(inputs, allowFields)

    const select = ['users.*'];
    let result = await this.Model.query()
      .select(select)
      .where(function () {
        this.where('username', 'LIKE', `%${data.keyword.replace(/%/, '\%')}%`)
        .orWhere('fullname', 'LIKE', `%${data.keyword.replace(/%/, '\%')}%`)
        .orWhere('phone', 'LIKE', `%${data.keyword.replace(/%/, '\%')}%`)
        .orWhere('email', 'LIKE', `%${data.keyword.replace(/%/, '\%')}%`)
      })
      .limit(10)
    return result;
  }
}

module.exports = UserController