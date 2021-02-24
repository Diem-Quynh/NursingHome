import BaseApi from './BaseService'

class NurseAssignment extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'nurseAssignments';
  }
}

export default NurseAssignment