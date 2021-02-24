const BaseModel = require("./BaseModel");
class DoctorAssignment extends BaseModel {
  static get tableName() {
    return 'doctor_assignments'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['doctorId','roomId'],
      properties: {
        id: { type: 'integer' },
        doctorId: { type: 'integer' },
        roomId: { type: 'integer' },
        dateBegin: { type: 'date' },
        dateEnd: { type: 'date' },
        note: { type: 'string' }
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
      'doctorId',
      'roomId',
      'dateBegin',
      'dateEnd',
      'note'
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

module.exports = DoctorAssignment;
