const BaseController = require('@app/Controllers/BaseController');
const BedModel = require('@app/Models/Bed');
const RoomModel = require('@app/Models/Room');
const PatientModel = require('@app/Models/Patient');
const ApiException = require('@app/Exceptions/ApiException');

const _ = require('lodash')

class BedController extends BaseController {
  constructor() {
    super();
    this.Model = BedModel;
    this.RoomModel = RoomModel;
    this.PatientModel = PatientModel;
  }

  async index() {
    const inputs = this.request.all();
    let result = await this.Model.query().getForGridTable(inputs);
    return result;
  }

  async detail() {
    let params = this.request.all()
    let id = params.id
    if (!id) throw new ApiException(9996, "ID is required!");
    let result = await this.Model.findById(id);
    if (!result) {
      throw new ApiException(7004, 'Data not found')
    }
    return result
  }

  async checkRoom(roomCode,bedId) {
    let check = await this.RoomModel.findOne({ 'code' : roomCode })
    if (!check) {
        throw new ApiException(7004, "Room not exists!");
    }
    if(bedId > check.bedNumber) {
      throw new ApiException(7003, "Bed code invalid!");
    }
  }

  async store() {
    const inputs = this.request.all()

    const allowFields = {
      roomCode: "string!",
      bedId: "number!",
      status: "number",
      note: "string"
    }
    let params = this.validate(inputs, allowFields, {
      removeNotAllow: true
    })

    await this.checkRoom(params.roomCode, params.bedId)

    let checkExist = await this.Model.findOne({'roomCode': params.roomCode, 'bedId': params.bedId});
    if (checkExist) {
      throw new ApiException(7002, "Bed already exists!");
    }
    return await this.Model.query().insert(params);
  }

  async update() {
    const inputs = this.request.all()
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
        roomCode: "string!",
        bedId: "number!",
        status: "number",
        note: "string"
      }
      let params = this.validate(inputs.values, allowFields, {
        removeNotAllow: true
      })

    let bed = await this.Model.findById(inputs.id)
    if (!bed) {
      throw new ApiException(7004, "Bed does not exist!")
    }
    
    await this.checkRoom(params.roomCode, params.bedId)

    let checkExist = await this.Model.findOne({'roomCode': params.roomCode, 'bedId': params.bedId});
    if (checkExist && checkExist.id != inputs.id) {
        throw new ApiException(7002, "Bed already exists!");
    }

    return await bed.patch(params)
  }

  async destroy() {
    const inputs = this.request.all();
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
        id: "number!"
    }

    let params = this.validate(inputs, allowFields);

    let checkPatient = await this.PatientModel.findOne({ 'bedId': params.id });
    if (checkPatient) {
        throw new ApiException(7005, "Constraint patient data cannot be deleted!")
    }

    await this.Model.query().deleteById(params.id);
    return {
        "message": "Delete success!"
    }
  }

    async delete() {
        const inputs = this.request.all();
        if (_.isEmpty(inputs.ids) || !Array.isArray(inputs.ids)) 
            throw new ApiException(9996, "ID is required. Expected: Array!");

        const allowFields = {
            ids: ["number!"]
        }

        let params = this.validate(inputs, allowFields);

        let checkPatient = await this.PatientModel.query().whereIn('bedId', params.ids)
        if (!_.isEmpty(checkPatient)) {
            throw new ApiException(7005, "Constraint patient data cannot be deleted!")
        }
        
        await this.Model.query().delete().whereIn('id',params.ids);
        return {
            "message": "Delete success!"
        }
    }

}

module.exports = BedController