import BaseApi from './BaseService'

class Bed extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'beds';
  }
}

export default Bed