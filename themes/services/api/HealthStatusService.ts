import BaseApi from './BaseService'

class HealthStatus extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'healthStatuses';
  }
}

export default HealthStatus