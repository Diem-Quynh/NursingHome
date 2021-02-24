const BaseModel = require("@app/Models/BaseModel");
const bcrypt = require("bcrypt")
const authConfig = require("@config/auth")
class User extends BaseModel {
  static get tableName() {
    return "users"
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['code', 'fullname', 'username', 'password'],
      properties: {
        id: { type: 'integer' },
        code: { type: 'string', minLength: 1, maxLenght: 255 },
        fullname: { type: 'string', minLength: 1, maxLenght: 255 },
        position: { type: 'string' },
        birdthday: { type: 'date' },
        gender: { type: 'integer' },
        address: { type: 'string' },
        cardId: { type: 'string' },
        email: { type: 'email' },
        phone: { type: 'string' },
        username: { type: 'string', minLength: 1, maxLenght: 255 },
        password: { type: 'string', minLength: 1, maxLenght: 255 },
        token: { type: 'string', minLength: 1, maxLenght: 255 },
        groupId: { type: 'integer' }
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
          from: 'users.groupId',
          to: 'user_groups.id'
        }
      }
    }
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

  static async getPermissions(groupId) {
    return await this.query()
      .select(['permissionKey','value'])
      .leftJoin('user_groups', {
        'users.groupId': 'user_groups.id'
      })
      .leftJoin('user_group_permissions', {
        'user_group_permissions.groupId': 'user_groups.id'
      })
      .where('users.groupId',groupId)
  }

  static async checkGroupRoot(ids) {
    return await this.query().select('users.groupId')
      .leftJoin('user_groups', {
        'users.groupId': 'user_groups.id'
      })
      .whereIn('users.id',ids).where('user_groups.name','root')
  }

  static async checkLogin({username, password}) {
    let user = await this.query().findOne({ username })
    if(!user) return false;
    
    let checkPassword = await this.compare(password, user.password);
    delete user.password;
    if(checkPassword) return user;
    return false;
  }
  
  static async hash(plainPassword){
    return await bcrypt.hash(plainPassword + authConfig.SECRET_KEY, 10)
  }

  static async compare(plainPassword, encryptedPassword){
    return await bcrypt.compare(plainPassword + authConfig.SECRET_KEY, encryptedPassword)
  }
  static async changePassword(id, newPassword){
    newPassword = await this.hash(newPassword)
    return await this.query().patchAndFetchById(id,{
      password: newPassword
    })
  }

}

module.exports = User;
