const BaseModel = require("./BaseModel");
class HealthSatus extends BaseModel {
  static get tableName() {
    return 'health_statuses'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['patientId','date'],
      properties: {
        id: { type: 'integer' },
        patientId: { type: 'integer' },
        date: { type: 'date' },
        weight: { type: 'decimal' },
        bloodPressure: { type: 'string' },
        bloodSugar: { type: 'integer' },
        heartRate: { type: 'integer' },
        doctorId: { type: 'integer' },
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
      'patientId',
      'date',
      'weight',
      'bloodPressure',
      'bloodSugar',
      'heartRate',
      'doctorId',
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

module.exports = HealthSatus;
