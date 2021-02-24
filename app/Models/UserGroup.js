const BaseModel = require("./BaseModel");
class UserGroup extends BaseModel {
  static get tableName() {
    return 'user_groups'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLenght: 255 },
        description: { type: 'string', minLength: 1, maxLenght: 255 }
      }
    }
  }

  static get relationMappings() {
    const UserGroupPermission = require("@app/Models/UserGroupPermission")
    return {
      UserGroupPermission: {
        relation: BaseModel.HasManyRelation,
        modelClass: UserGroupPermission,
        join: {
          from: 'user_groups.id',
          to: 'user_group_permissions.groupId'
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

}

module.exports = UserGroup;
