import BaseApi from './BaseService'

class Room extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'rooms';
  }
}

export default Room