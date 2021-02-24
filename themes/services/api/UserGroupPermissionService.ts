import BaseApi from './BaseService'

class UserGroupPermission extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'userGroupPermissions'; //kế thừa CRUD từ thằng cha
  }
  async update(data: any){
    const url = this.route(`api.${this.name}.update`).href
    let result = await this.Request.put(url, data)
    return result;
  }
}

export default UserGroupPermission