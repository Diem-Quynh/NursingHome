import BaseApi from './BaseService'

class DoctorAssignment extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'doctorAssignments';
  }
}

export default DoctorAssignment