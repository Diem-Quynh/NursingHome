const BaseController = require("./BaseController");
const UserGroupModel = require("@app/Models/UserGroup");
const UserModel = require("@app/Models/User");
const UserGroupPermissionModel = require("@app/Models/UserGroupPermission");
const ApiException = require("@app/Exceptions/ApiException");
const _ = require('lodash')

class UserGroupController extends BaseController {
    constructor() {
        super()
        this.Model = UserGroupModel;
        this.UserModel = UserModel;
        this.UserGroupPermissionModel = UserGroupPermissionModel;
    }

    async index() {
        const inputs = this.request.all();
        let result = await this.Model.query().getForGridTable(inputs);
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
        return result
      }

    async store() {
        const allowFields = {
            name: "string!",
            description: "string"
        }
        let inputs = this.request.all()
        let auth = this.request.auth

        let data = this.validate(inputs, allowFields, {
            removeNotAllow: true
        });

        let name = data.name.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
        let checkExist = await this.Model.findOne({'name': name})

        if (checkExist) {
            throw new ApiException(7001, "UserGroup already exists!")
        }

        return await this.Model.query().insert({ ...data });
    }

    async update() {
        const allowFields = {
            name: "string!",
            description: "string"
        }
        let inputs = this.request.all();
        if (!inputs.id) throw new ApiException(9996, "ID is required!");
        let data = this.validate(inputs.values, allowFields, {
            removeNotAllow: true
        });
        let group = await this.Model.findById(inputs.id);
        if (!group) {
            throw new ApiException(7002, "UserGroup does not exist!");
        }
        let existUserGroupName = await this.Model.findOne('name', data['name']);
        if (existUserGroupName && existUserGroupName.id != inputs.id) {
            throw new ApiException(7001, "UserGroup_name already exists!");
        }
        return await group.patch(data);
    }

    async getPermissions() {
        let inputs = this.request.all();
        if (!inputs.id) {
            throw new ApiException(7002, "GroupId is required");
        }
        let groupId = inputs.id
        return this.Model.getPermissions(groupId);
    }

    async destroy() {
        const inputs = this.request.all();
        const allowFields = {
            id: "number!"
        }
        let params = this.validate(inputs, allowFields);

        let checkPermission = await this.UserGroupPermissionModel.findOne({ 'groupId': params.id, 'permissionKey': 'root' })
        if (checkPermission) {
            throw new ApiException(7005, "Cannot delete root group!")
        }

        let checkUser = await this.UserModel.findOne({ 'groupId': params.id });
        if (checkUser) {
            throw new ApiException(7002, "Group contains User cannot be deleted!")
        }

        await this.Model.deleteById(params.id);
        return {
            "message": "Delete success!"
        }
    }

    async delete() {
        const inputs = this.request.all();
        const allowFields = {
            ids: ["number!"]
        }
        let params = this.validate(inputs, allowFields);

        let checkPermission = await this.UserGroupPermissionModel.query()
            .where('permissionKey', 'root')
            .whereIn('groupId', params.ids)
        if (!_.isEmpty(checkPermission)) {
            throw new ApiException(7005, "Cannot delete root group!")
        }

        let checkUser = await this.UserModel.query()
            .whereIn('groupId', params.ids)
        if (!_.isEmpty(checkUser)) {
            throw new ApiException(7002, "Group contains User cannot be deleted!")
        }

        await this.Model.deleteByIds(params.ids);
        return {
            "message": "Delete success!"
        }
    }
}

module.exports = UserGroupController