import BaseApi from './BaseService'

class UserGroups extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'userGroups'; //kế thừa CRUD từ thằng cha
  }
}

export default UserGroups