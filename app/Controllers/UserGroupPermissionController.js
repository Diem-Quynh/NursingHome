const BaseController = require("./BaseController");
const UserGroupPermissionModel = require("@app/Models/UserGroupPermission");
const UserPermissionModel = require("@app/Models/UserPermission");
const ApiException = require("@app/Exceptions/ApiException");

class UserGroupPermissionController extends BaseController {
    constructor() {
        super()
        this.Model = UserGroupPermissionModel;
        this.UserPermissionModel = UserPermissionModel;
    }

    async update() {
        let inputs = this.request.all();
        inputs.groupId = Number(inputs.groupId)
        const { groupId, permissions } = inputs;

        if (!groupId) throw new ApiException(7006, "GroupId is required");
        if (!permissions) throw new ApiException(7004, "No data");

        //kiem tra auth co quyen voi groupId nay hay khong
        //do something....

        for (let permissionKey in permissions) {
            const value = permissions[permissionKey]
            const exist = await this.UserPermissionModel.getByKey(permissionKey);
            const role = await this.Model.getByPermissionKey({ permissionKey, groupId }); //chỗ này có thể tối ưu được.

            if (!exist) throw new ApiException(7004, `${permissionKey} doesn't exist`);

            //kiem tra gia tri moi cua quyen
            if (!value) { //truong hop xoa bo quyen cu CRUD = 0
                await this.Model.query().where({ groupId, permissionKey }).del();
            }
            else if (!role) { //quyen moi chua ton tai trong DB
                await this.Model.query().insert({ permissionKey, groupId, value });
            }
            else if (role.value != value) { //update lai gia tri moi
                await this.Model.query().patchAndFetchById(role.id, { value: value })
            }
        }
        return { message: `Update successfully` }
    }
}

module.exports = UserGroupPermissionController