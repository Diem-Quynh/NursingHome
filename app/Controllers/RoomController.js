const BaseController = require('@app/Controllers/BaseController');
const RoomModel = require('@app/Models/Room');
const BedModel = require('@app/Models/Bed');
const DoctorAssignmentModel = require('@app/Models/DoctorAssignment');
const ApiException = require('@app/Exceptions/ApiException');

const moment = require('moment')
const _ = require('lodash')

class RoomController extends BaseController {
  constructor() {
    super();
    this.Model = RoomModel;
    this.BedModel = BedModel;
    this.DoctorAssignmentModel = DoctorAssignmentModel;
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

  async store() {
    const inputs = this.request.all()

    const allowFields = {
      code: "string!",
      bedNumber: "number!",
      note: "string"
    }
    let params = this.validate(inputs, allowFields, {
      removeNotAllow: true
    })
    params.code = params.code.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    let checkExist = await this.Model.findOne({'code': params.code});
    if (checkExist) {
      throw new ApiException(7002, "Room code already exists!");
    }
    return await this.Model.insert(params);
  }

  async update() {
    const inputs = this.request.all()
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
        code: "string!",
        bedNumber: "number!",
        note: "string"
      }
      let params = this.validate(inputs.values, allowFields, {
        removeNotAllow: true
      })

    let room = await this.Model.query().findById(inputs.id)
    if (!room) {
      throw new ApiException(7004, "Room does not exist!")
    }

    params.code = params.code.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    let checkCode = await this.Model.findOne('code', params.code);
    if (checkCode && checkCode.id != inputs.id) {
      throw new ApiException(7002, "Room code already exists!");
    }
    return await room.patch(params)
  }

  async destroy() {
    const inputs = this.request.all();
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
        id: "number!"
    }

    let params = this.validate(inputs, allowFields);
    let room = await this.Model.findById(params.id)

    let checkBed = await this.Model.getBeds(room.code)
    if (checkBed) {
        throw new ApiException(7005, "Room contains Bed cannot be deleted!")
    }

    let checkDoctorAssignment = await this.DoctorAssignmentModel.findOne({ 'roomCode': room.code });
    if (checkDoctorAssignment) {
        throw new ApiException(7005, "Assigned room cannot be deleted!")
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
    let roomCodes = this.Model.query().select('code').whereIn('id',params.ids)

    // let checkBed = await this.Model.getBeds(params.ids)
    let checkBed = await this.BedModel.query().whereIn('roomCode', roomCodes)
    if (!_.isEmpty(checkBed)) {
        throw new ApiException(7007, "Room contains Bed cannot be deleted!")
    }
    
    let checkDoctorAssignment = await this.DoctorAssignmentModel.query().whereIn( 'roomCode', roomCodes );
    if (!_.isEmpty(checkDoctorAssignment)) {
        throw new ApiException(7007, "Assigned room cannot be deleted!")
    }

    await roomCodes.delete();
    return {
        "message": "Delete success!"
    }
  }

}

module.exports = RoomController