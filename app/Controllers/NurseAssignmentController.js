const BaseController = require('@app/Controllers/BaseController');
const PatientModel = require('@app/Models/Patient');
const UserModel = require('@app/Models/User');
const NurseAssignmentModel = require('@root/app/Models/NurseAssignment');
const ApiException = require('@app/Exceptions/ApiException');

const _ = require('lodash');

class NurseAssignmentController extends BaseController {
  constructor() {
    super();
    this.Model = NurseAssignmentModel;
    this.PatientModel = PatientModel;
    this.UserModel = UserModel;
  }

  async index() {
    const inputs = this.request.all();
    const select = ['nurse_assignments.*', 'users.fullname as nurseName', 'users.code as nurseCode', 
    'patients.code as patientCode', 'patients.fullname as patientName', 'roomCode', 'beds.bedId as bedCode'];
    let result = await this.Model.query().select(select)
    .leftJoin('users', { 'nurse_assignments.nurseId': 'users.id' })
    .leftJoin('patients', { 'nurse_assignments.patientId': 'patients.id' })
    .leftJoin('beds', { 'patients.bedId': 'beds.id' })
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

  async checkNurse(nurseId) {
    let check = await this.UserModel.findById(nurseId)
    if (!check) {
        throw new ApiException(7004, "Employee not exists!");
    }
    else {
      check.position = check.position? check.position.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''):""
      if(check.position != 'Hộ lý')
        throw new ApiException(7003, "Employee not nurse!");
    }
  }

  async checkPatient(patientId) {
    let check = await this.PatientModel.findById(patientId)
    if (!check) {
        throw new ApiException(7004, "Patient not exists!");
    }
  }

  async checkDate(dateBegin, dateEnd){
    let invalid = Date.parse(dateBegin) > Date.parse(dateEnd)
    if(invalid)
      throw new ApiException(7003, "Date begin and date end invalid!")
  }

  async store() {
    const inputs = this.request.all()

    const allowFields = {
        nurseId: "number!",
        patientId: 'number!',
        dateBegin: "date",
        dateEnd: "date",
        note: "string"
    }
    let params = this.validate(inputs, allowFields, {
      removeNotAllow: true
    })
    await this.checkNurse(params.nurseId)
    await this.checkPatient(params.patientId)
    if (_.has(params, 'dateBegin') && _.has(params, 'dateEnd')){
      await this.checkDate(params.dateBegin, params.dateEnd)
    }

    return await this.Model.query().insert(params);
  }

  async update() {
    const inputs = this.request.all()
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
        nurseId: "number!",
        patientId: 'number!',
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
    await this.checkNurse(params.nurseId)
    await this.checkPatient(params.patientId)
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

module.exports = NurseAssignmentController