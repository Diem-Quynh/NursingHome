const BaseModel = require("./BaseModel");
const TABLE_NAME = "user_group_permissions";

class UserGroupPermission extends BaseModel {
  static get tableName() {
    return 'user_group_permissions'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['groupId'],
      properties: {
        id: { type: 'integer' },
        groupId: { type: 'integer' },
        value: { type: 'integer' },
        permissionKey: { type: 'string', minLength: 1, maxLenght: 255 }
      }
    }
  }

  static get relationMappings() {
    const UserGroup = require("@app/Models/UserGroup")
    return {
      userGroup: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserGroup,
        join: {
          from: 'user_group_permissions.groupId',
          to: 'user_groups.id'
        }
      }
    }
  }

  static get relationship() {
    return {}
  }

  get softDelete() {
    return true;
  }

  get allowFields() {
    return [
      'id',
      'groupId',
      'permissionKey',
      'value'
    ]
  }

  static async findById(id) {
    return await this.query().findById(id)
  }
  static async findByIds(ids) {
    return await this.query().findByIds(ids)
  }
  static async findOne(...whereArgs) {
    return await this.query().findOne(...whereArgs)
  }
  static async deleteById(id) {
    return await this.query().deleteById(id)
  }
  static async deleteByIds(ids) {
    return await this.query().delete().whereIn('id', ids)
  }
  static async insert(...params) {
    return await this.query().insert(...params)
  }

  static async getByPermissionKey({ permissionKey, groupId }) {
    return this.query().findOne({ permissionKey, groupId })
  }

}

module.exports = UserGroupPermission;
