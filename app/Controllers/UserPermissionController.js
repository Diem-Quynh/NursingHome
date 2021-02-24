const BaseController = require("./BaseController");
const UserPermissionModel = require("@app/Models/UserPermission");
const UserGroupModel = require("@app/Models/UserGroup");
const UserGroupPermissionModel = require("@app/Models/UserGroupPermission");
const ApiException = require("@app/Exceptions/ApiException");
const _ = require('lodash')

class UserPermissionController extends BaseController {
    constructor() {
        super()
        this.Model = UserPermissionModel;
        this.UserGroupModel = UserGroupModel;
        this.UserGroupPermissionModel = UserGroupPermissionModel;
    }

    async index(){
        const inputs = this.request.all();
        const select = ['user_permissions.id','user_groups.name as groupName',
          'user_permissions.key as keyName','user_permissions.name',
          'user_permissions.avalibleValue','user_permissions.description','user_permissions.groupId' 
        ]
        return await this.Model.query().select(select)
          .leftJoin('user_groups',{'user_permissions.groupId': 'user_groups.id'})
          .getForGridTable(inputs);
    }

    async detail() {
      let params = this.request.all()
      let id = params.id
      if (!id) throw new ApiException(9996, "ID is required!");
      let result = await this.Model.findById(id);
      if (!result) {
        throw new ApiException(7004, 'Data not found')
      }
      return result
    }

    async store() {
        const inputs = this.request.all()
        const allowFields = {
          key: "string!",
          name: "string!",
          description: "string",
          avalibleValue: "number!",
          groupId: "number!"
        }
        let params = this.validate(inputs, allowFields, {
          removeNotAllow: true
        })
        params.key = params.key.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
        let checkExist = await this.Model.findOne({'key': params.key});
        if (checkExist) {
          throw new ApiException(7002, "Permission key already exists!");
        }

        const checkGroup = await this.UserGroupModel.findById(params.groupId)
        if (!checkGroup) {
          throw new ApiException(7004, "Group doesn't exists!");
        }
        return await this.Model.insert(params);
    }

    async update() {
      const inputs = this.request.all()
      if (!inputs.id) throw new ApiException(9996, "ID is required!");
  
      const allowFields = {
          key: "string!",
          name: "string!",
          description: "string",
          avalibleValue: "number!",
          groupId: "number!"
        }
        let params = this.validate(inputs.values, allowFields, {
          removeNotAllow: true
        })
  
      let permission = await this.Model.findById(inputs.id)
      if (!permission) {
        throw new ApiException(7004, "Permission does not exist!")
      }
  
      params.key = params.key.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
      let checkKey = await this.Model.findOne('key', params.key);
      if (checkKey && checkKey.id != inputs.id) {
        throw new ApiException(7002, "Permission key already exists!");
      }
      const checkGroup = await this.UserGroupModel.findById(params.groupId)
        if (!checkGroup) {
          throw new ApiException(7004, "Group doesn't exists!");
      }
      return await permission.patch(params)
    }

    async destroy() {
      const inputs = this.request.all();
      if (!inputs.id) throw new ApiException(9996, "ID is required!");
  
      const allowFields = {
          id: "number!"
      }
  
      let params = this.validate(inputs, allowFields);
      let permission = await this.Model.findById(params.id)

      if(permission.key == 'root')
        throw new ApiException(7005, "Root permission cannot be deleted!")
  
      let checkPermission = await this.UserGroupPermissionModel.findOne('permissionKey',permission.key)
      if (checkPermission) {
          throw new ApiException(7007, "Assigned permission cannot be deleted!")
      }
  
      await this.Model.deleteById(params.id);
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
      let permissionKeys = await this.Model.query().select('key').whereIn('id',params.ids)

      let checkRoot = await permissionKeys.where('key','root')
      if(!_.isEmpty(checkRoot)) throw new ApiException(7005, "Root permission cannot be deleted!")

      let checkPermission = await this.UserGroupPermissionModel.query()
        .whereIn('permissionKey', permissionKeys)
      if (!_.isEmpty(checkPermission)) {
          throw new ApiException(7007, "Assigned permission cannot be deleted!")
      }
  
      await permissionKeys.delete();
      return {
          "message": "Delete success!"
      }
    }

    async getByGroupId(){
        let inputs = this.request.all();
        if (!inputs.groupId){
            throw new ApiException(7006, "GroupId is required");
        }
        return await this.Model.getByGroupId(inputs.groupId);
    }
}

module.exports = UserPermissionController