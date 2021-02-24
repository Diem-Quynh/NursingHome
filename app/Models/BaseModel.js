const Objection = require('@core/Objection');
const ExtendQueryBuilder = require('./QueryBuilder')
class BaseModel extends Objection{
  static get tableName() {
    throw new Error(`Need to implement tableName function in: ${this.name}Model`)
  }
  static get QueryBuilder() {
    return ExtendQueryBuilder
  }

  //override để tương thích với bên Model By Company
  // static withCompanyId(companyId) {
  //   let query = this.query()
  //   return query
  // }
  

  /**
   * MODEL
   * @param {*} id 
   */
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

  /**
   * INSTANCE
   * @param  {...any} params 
   */
  async update(...params) {
    return await this.$query().update(...params)
  }
  async patch(...params) {
    return await this.$query().patch(...params)
  }
}

module.exports = BaseModel