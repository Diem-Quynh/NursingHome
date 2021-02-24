const BaseController = require('@app/Controllers/BaseController');
const PatientModel = require('@app/Models/Patient');
const UserModel = require('@app/Models/User');
const HealthStatusModel = require('@app/Models/HealthStatus');
const ApiException = require('@app/Exceptions/ApiException');

const _ = require('lodash');

class HealthStatusController extends BaseController {
  constructor() {
    super();
    this.Model = HealthStatusModel;
    this.PatientModel = PatientModel;
    this.UserModel = UserModel;
  }

  async index() {
    const inputs = this.request.all();
    const select = ['health_statuses.*', 'users.fullname as doctorName', 'users.code as doctorCode', 
      'patients.code as patientCode', 'patients.fullname as patientName', 'beds.bedId as bedCode', 'roomCode'
    ];
    let result = await this.Model.query().select(select)
    .leftJoin('users', { 'health_statuses.doctorId': 'users.id' })
    .leftJoin('patients', { 'health_statuses.patientId': 'patients.id' })
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

  async checkDoctor(doctorId) {
    let check = await this.UserModel.findById(doctorId)
    if (!check) {
        throw new ApiException(7004, "Employee not exists!");
    }
    else {
      check.position = check.position? check.position.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''): ""
      if(check.position != 'Bác sỹ')
        throw new ApiException(7004, "Employee not doctor!");
    }
  }

  async checkPatient(patientId) {
    let check = await this.PatientModel.findById(patientId)
    if (!check) {
        throw new ApiException(7004, "Patient not exists!");
    }
  }

  async store() {
    const inputs = this.request.all()

    const allowFields = {
        patientId: "number!",
        date: "date!",
        weight: "number",
        bloodPressure: "string",
        bloodSugar: "number",
        heartRate: "number",
        doctorId: 'number!',
        note: "string"
    }
    let params = this.validate(inputs, allowFields, {
      removeNotAllow: true
    })
    await this.checkPatient(params.patientId)
    await this.checkDoctor(params.doctorId)

    return await this.Model.query().insert(params);
  }

  async update() {
    const inputs = this.request.all()
    if (!inputs.id) throw new ApiException(9996, "ID is required!");

    const allowFields = {
      patientId: "number!",
      date: "date!",
      weight: "number",
      bloodPressure: "string",
      bloodSugar: "number",
      heartRate: "number",
      doctorId: 'number!',
      note: "string"
    }
    let params = this.validate(inputs.params, allowFields, { removeNotAllow: true })

    let health = await this.Model.findById(inputs.id)
    if (!health) {
      throw new ApiException(7004, "Health check status does not exist!")
    }
    await this.checkPatient(params.patientId)
    await this.checkDoctor(params.doctorId)

    return await health.patch(params)
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

module.exports = HealthStatusController