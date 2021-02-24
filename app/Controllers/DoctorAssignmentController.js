const BaseController = require('@app/Controllers/BaseController');
const RoomModel = require('@app/Models/Room');
const UserModel = require('@app/Models/User');
const DoctorAssignmentModel = require('@app/Models/DoctorAssignment');
const ApiException = require('@app/Exceptions/ApiException');

const _ = require('lodash');
const moment = require('moment')

class DoctorAssignmentController extends BaseController {
  constructor() {
    super();
    this.Model = DoctorAssignmentModel;
    this.RoomModel = RoomModel;
    this.UserModel = UserModel;
  }

  async index() {
    const inputs = this.request.all();
    const select = ['doctor_assignments.*', 'fullname', 'users.code as doctorCode'];
    let result = await this.Model.query().select(select)
    .leftJoin('users', {
      'doctor_assignments.doctorId': 'users.id'
    })
    .getForGridTable(inputs);
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

  async checkDoctor(doctorId) {
    let check = await this.UserModel.findById(doctorId)
    if (!check) {
        throw new ApiException(7004, "Employee not exists!");
    }
    else {
      check.position = check.position? check.position.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''): ""
      if(check.position != 'Bác sỹ')
        throw new ApiException(7003, "Employee not doctor!");
    }
  }

  async checkRoom(roomCode) {
    let check = await this.RoomModel.findOne({ "code": roomCode })
    if (!check) {
        throw new ApiException(7004, "Room not exists!");
    }
  }

  async checkDate(dateBegin, dateEnd){
    let invalid = Date.parse(dateBegin) > Date.parse(dateEnd)
    if(invalid)
      throw new ApiException(7003, "Date begin and date end invalid!")
  }

  async store() {
    const inputs = this.request.all()
    console.log(inputs.dateBegin)
    const date = moment(inputs.dateBegin).utcOffset('+07:00')
    console.log(date)
    const allowFields = {
        doctorId: "number!",
        roomCode: 'string!',
        dateBegin: "date",
        dateEnd: "date",
        note: "string"
    }
    let params = this.validate(inputs, allowFields, {
      removeNotAllow: true
    })
    await this.checkDoctor(params.doctorId)
    await this.checkRoom(params.roomCode)
    if (_.has(params, 'dateBegin') && _.has(params, 'dateEnd')){
      await this.checkDate(params.dateBegin, params.dateEnd)
    }

    return await this.Model.query().insert(params);
  }

  async update() {
    const inputs = this.request.all()
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
      doctorId: "number!",
      roomCode: 'string!',
      dateBegin: "date",
      dateEnd: "date",
      note: "string"
      }
      let params = this.validate(inputs.values, allowFields, {
        removeNotAllow: true
      })

    let assignment = await this.Model.findById(inputs.id)
    if (!assignment) {
      throw new ApiException(7004, "Asignment does not exist!")
    }
    await this.checkDoctor(params.doctorId)
    await this.checkRoom(params.roomCode)
    if (_.has(params, 'dateBegin') && _.has(params, 'dateEnd')){
      await this.checkDate(params.dateBegin, params.dateEnd)
    }

    return await assignment.patch(params)
  }

  async destroy() {
    const inputs = this.request.all();
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
        id: "number!"
    }

    let params = this.validate(inputs, allowFields);

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
        
        await this.Model.query().delete().whereIn('id',params.ids);
        return {
            "message": "Delete success!"
        }
    }

}

module.exports = DoctorAssignmentController