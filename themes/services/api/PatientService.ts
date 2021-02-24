import BaseApi from './BaseService'

class Patient extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'patients';
  }
}

export default Patient