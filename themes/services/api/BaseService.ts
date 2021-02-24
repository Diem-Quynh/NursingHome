import _ from 'lodash'
import Request from 'themes/modules/Request'
import route from 'themes/route'
import Router from 'next/router'
import cookies from 'themes/modules/Cookies';
import nextCookie from 'next-cookies'
import { notification } from 'antd';
import Cookies from 'universal-cookie';


class BaseApi{
  cookies: Cookies
  Request: Request
  name: string

  constructor(context?: Context) {
    const cookiesObj = context ? nextCookie(context): {}
    this.cookies = cookies(cookiesObj);
    this.Request = new Request(cookiesObj)
    this.Request.handleGlobalCallback = this.globalHandleCallback
    this.Request.handleGlobalErrorCallback = this.globalHandleErrorCallback
    this.name = "";
  }

  getData = (obj: any, path: string, defaultValue: any) => {
    return _.get(obj, path, defaultValue)
  }
  globalHandleCallback = (response: Response) => {
    return response
  }

  globalHandleErrorCallback = (error: any) => {
    let status = _.get(error, "response.status", -1);
    if(status === -1){
      //notify("Unable connect to server!", "error")
    }
    else if (status === 401) {
      this.cookies.remove("token")
      this.cookies.remove("user")
      if (window && window.location.pathname !== "/login"){
        //notify("Login session expired!", "error")
        this.redirect("frontend.admin.login")
      }
      else{
        //login screen. không làm gì cả.
      }
    }
    return error.response
  }

  route(routeName: string, query?: any){
    return route(routeName, query)
  }

  redirect(routeName: string, query?: any){
    let nextRoute = route(routeName, query)
    Router.push(nextRoute.href, nextRoute.as)
  }

  async index(data?: any){
    const url = this.route(`api.${this.name}.index`, data).href
    return await this.Request.get(url, data)
  }

  async create(data: any){
    const url = this.route(`api.${this.name}.store`,data).href
    return await this.Request.post(url, data)
  }

  async detail(data: any){
    const url = this.route(`api.${this.name}.detail`, data).href
    return await this.Request.get(url, data)
  }

  async edit(data: any){
    const url = this.route(`api.${this.name}.update`, data).href
    return await this.Request.put(url, data)
  }

  async delete(data: any){
    const url = this.route(`api.${this.name}.delete`, data).href
    return await this.Request.delete(url, data)
  }

}

export default BaseApi