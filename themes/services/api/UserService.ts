import BaseApi from './BaseService'

class User extends BaseApi {
  constructor(context?: Context){
    super(context)
    this.name = 'users'; //kế thừa CRUD từ thằng cha
  }
  async login({ data }: {data: {username: string, password: string}}) {
    const url = this.route("api.login").href
    let result = await this.Request.post(url, data) || {}
      //success
    this.cookies.set('token', this.getData(result, "token", undefined), {
      path: "/"
    })
    this.cookies.set('user', this.getData(result, "user", {}),{
      path: "/"
    })
    this.redirect("frontend.admin.dashboard.index")
    return result;
  }
  async updatePassword(data: { id: number, password: string}){
    const url = this.route(`api.${this.name}.updatePassword`, data).href
    let result = await this.Request.put(url, data)
    return result.data;
  }
  async userUpdatePassword(data: { id: number, password: string}){
    const url = this.route(`api.${this.name}.userUpdatePassword`, data).href
    let result = await this.Request.put(url, data)
    return result.data;
  }
  async search(data: any){
    const url = this.route(`api.${this.name}.search`, data).href
    return await this.Request.get(url, data)
  }
}

export default User