const BaseModel = require("./BaseModel");
class Bed extends BaseModel {
  static get tableName() {
    return 'beds'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['roomId','bedId'],
      properties: {
        id: { type: 'integer' },
        roomId: { type: 'integer' },
        bedId: { type: 'integer' },
        status: { type: 'integer' },
        note: { type: 'string' }
      }
    }
  }

  static get relationMappings() {
    const Room = require("@app/Models/Room")
    return {
      room: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Room,
        join: {
          from: 'beds.roomId',
          to: 'rooms.id'
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
      'roomId',
      'bedId',
      'status',
      'note',
    ]
  }

  static async getRoom(bed_Id) {
    let result = await this.relatedQuery('room').for(bed_Id)
    console.log(result)
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

module.exports = Bed;
