const BaseController = require('@app/Controllers/BaseController');
const PatientModel = require('@app/Models/Patient');
const BedModel = require('@app/Models/Bed');
const NurseAssignmentModel = require('@root/app/Models/NurseAssignment');
const HealthStatusModel = require('@app/Models/HealthStatus');
const ApiException = require('@app/Exceptions/ApiException');

const _ = require('lodash')

class PatientController extends BaseController {
  constructor() {
    super();
    this.Model = PatientModel;
    this.BedModel = BedModel;
    this.NurseAssignmentModel = NurseAssignmentModel;
    this.HealthStatusModel = HealthStatusModel;
  }

  async index() {
    const inputs = this.request.all();
    const select = ['patients.*', 'beds.bedId as bedCode', 'beds.roomCode as roomCode'];
    let result = await this.Model.query().select(select)
    .leftJoin('beds', {
      'patients.bedId': 'beds.id'
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

  async checkBed(bedId, dateIn) {
    let check = await this.BedModel.findById(bedId)
    if (!check) {
        throw new ApiException(7004, "Bed not exists!");
    }
  }

  async checkDate(dateIn, dateOut){
    let invalid = Date.parse(dateIn) > Date.parse(dateOut)
    if(invalid)
      throw new ApiException(7003, "Date in and date out invalid!")
  }

  async checkDataExist(key, data) {
    let check = await this.Model.findOne(key, data)
    if (check) {
      throw new ApiException(7002, `${key} already exists!`);
    }
  }

  async checkDataUpdate(key, data, id) {
    let check = await this.Model.findOne(key, data)
    if (check && check.id != id) {
      throw new ApiException(7002, `${key} already exists!`);
    }
  }

  async store() {
    const inputs = this.request.all()

    const allowFields = {
        code: "string!",
        fullname: "string!",
        birthday: 'date',
        gender: 'number',
        address: 'string',
        cardId: 'string',
        phone: "string",
        medicalHistory: "string",
        dateIn: "date",
        dateOut: "date",
        bedId: "number"
    }
    let params = this.validate(inputs, allowFields, {
      removeNotAllow: true
    })

    params.code = params.code.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    await this.checkDataExist('code', params.code)

    if (_.has(params, 'dateIn') && _.has(params, 'dateOut')){
      await this.checkDate(params.dateIn, params.dateOut)
    }

    if (_.has(params, 'bedId')){
      let check = await this.BedModel.findById(params.bedId)
      if (!check) {
        throw new ApiException(7004, "Bed not exists!");
      }
      else if(check.status) 
        throw new ApiException(7003, "Bed full!");
    }

    return await this.Model.query().insert(params);
  }

  async update() {
    const inputs = this.request.all()
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
        code: "string!",
        fullname: "string!",
        birthday: 'date',
        gender: 'number',
        address: 'string',
        cardId: 'string',
        phone: "string",
        medicalHistory: "string",
        dateIn: "date",
        dateOut: "date",
        bedId: "number"
    }
      let params = this.validate(inputs.values, allowFields, {
        removeNotAllow: true
      })

    let patient = await this.Model.findById(inputs.id)
    if (!patient) {
      throw new ApiException(7004, "Patient does not exist!")
    }

    params.code = params.code.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    await this.checkDataUpdate('code', params.code, inputs.id)
    
    if (_.has(params, 'dateIn') && _.has(params, 'dateOut')){
      await this.checkDate(params.dateIn, params.dateOut)
    }

    if (_.has(params, 'bedId')){
      let check = await this.BedModel.findById(params.bedId)
      if (!check) {
        throw new ApiException(7004, "Bed not exists!");
      }
      else if(check.status && check.id != inputs.id) 
        throw new ApiException(7003, "Bed full!");
    }

    return await patient.patch(params)
  }

  async destroy() {
    const inputs = this.request.all();
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
        id: "number!"
    }

    let params = this.validate(inputs, allowFields);

    let checkNurse = await this.NurseAssignmentModel.findOne({ 'patientId': params.id });
    if (checkNurse) {
        throw new ApiException(7005, "Constraint assigned data cannot be deleted!")
    }

    let checkHealth = await this.HealthStatusModel.findOne({ 'patientId': params.id });
    if (checkHealth) {
        throw new ApiException(7005, "Constraint patient health data cannot be deleted!")
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

        let checkNurse = await this.NurseAssignmentModel.query().whereIn('patientId', params.ids)
        if (!_.isEmpty(checkNurse)) {
            throw new ApiException(7005, "Constraint assigned data cannot be deleted!")
        }

        let checkHealth = await this.HealthStatusModel.query().whereIn('patientId', params.ids)
        if (!_.isEmpty(checkHealth)) {
            throw new ApiException(7005, "Constraint patient health data cannot be deleted!")
        }
        
        await this.Model.query().delete().whereIn('id',params.ids);
        return {
            "message": "Delete success!"
        }
    }

}

module.exports = PatientController