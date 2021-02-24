const BaseModel = require("./BaseModel");
class Room extends BaseModel {
  static get tableName() {
    return 'rooms'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['code'],
      properties: {
        id: { type: 'integer' },
        code: { type: 'string', minLength: 1, maxLenght: 255 },
        bedNumber: { type: 'integer' },
        note: { type: 'string' }
      }
    }
  }

  static get relationMappings() {
    const Bed = require("@app/Models/Bed")
    const DoctorAssignment = require("@app/Models/DoctorAssignment")
    return {
      beds: {
        relation: BaseModel.HasManyRelation,
        modelClass: Bed,
        join: {
          from: 'rooms.code',
          to: 'beds.roomCode'
        }
      },
      doctorAssignment: {
        relation: BaseModel.HasManyRelation,
        modelClass: DoctorAssignment,
        join: {
          from: 'rooms.code',
          to: 'beds.roomCode'
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
      'code',
      'bedNumber',
      'note',
    ]
  }

  static async getBeds(roomCodes) {
    let result = await this.relatedQuery('beds').for(roomCodes)
    return result
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

module.exports = Room;
