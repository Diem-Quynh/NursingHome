const BaseModel = require("./BaseModel");
class Patient extends BaseModel {
  static get tableName() {
    return 'patients'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['code','fullname'],
      properties: {
        id: { type: 'integer' },
        code: { type: 'string' },
        fullname: { type: 'string' },
        birdthday: { type: 'date' },
        gender: { type: 'integer' },
        address: { type: 'string' },
        cardId: { type: 'string' },
        phone: { type: 'string' },
        medicalHistory: { type: 'string' },
        dateIn: { type: 'date' },
        dateOut: { type: 'date' },
        bedId: { type: 'integer' }
      }
    }
  }

  static get relationMappings() {
    return {
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
      'code',
      'fullname',
      'birdthday',
      'gender',
      'address',
      'cardId',
      'phone',
      'medicalHistory',
      'dateIn',
      'dateOut',
      'bedId'
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

module.exports = Patient;
