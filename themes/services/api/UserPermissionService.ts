import BaseApi from './BaseService'
import { group } from 'console';

class UserPermission extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'userPermissions'; //kế thừa CRUD từ thằng cha
  }
  async getByGroupId(data: {groupId: number}){
    const url = this.route(`api.${this.name}.getByGroupId`, data).href
    let result = await this.Request.get(url, data)
    return result;
  }
}

export default UserPermission