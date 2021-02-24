const BaseModel = require("./BaseModel");

class UserPermission extends BaseModel {
  static get tableName() {
    return 'user_permissions'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLenght: 255 },
        description: { type: 'string', minLength: 1, maxLenght: 255 },
        availableValue: { type: 'integer' },
        key: { type: 'string', minLength: 1, maxLenght: 255 },
        groupId: { type: 'integer' }
      }
    }
  }

  static get relationMappings() {
    const UserGroup = require("@app/Models/UserGroup")
    return {
      userGroups: {
        relation: BaseModel.HasOneThroughRelation,
        modelClass: UserGroup,
        join: {
          from: 'user_permissions.groupId',
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
      'name',
      'description',
      'availableValue',
      'key',
      'groupId'
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

  static async getByGroupId(groupId) {
    let result = await this.query().select(['user_permissions.*','value'])
      .leftJoin('user_group_permissions', { 'user_permissions.key': 'user_group_permissions.permissionKey' })
      .where('user_permissions.groupId',groupId)
    return result
  }

  static async getByKey(permissionKey) {
    return await this.query().findOne({ 'key': permissionKey })
  }

}

module.exports = UserPermission;
