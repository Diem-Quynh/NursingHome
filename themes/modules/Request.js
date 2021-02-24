import axios from 'axios'
import cookies from 'themes/modules/Cookies';
import _ from 'lodash'
const getConfig = require('next/config').default
const { publicRuntimeConfig } = getConfig();
import RequestException from './RequestException'

export default class Request {
  constructor(cookiesString) {
    this.handleGlobalCallback = undefined;
    this.handleGlobalErrorCallback = undefined;
    this.cookies = cookiesString
    const token = cookies(cookiesString).get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.interceptors.response.use(this.handleGlobal.bind(this), this.handleGlobalError.bind(this));
  }

  handleGlobal(response) {
    if (this.handleGlobalCallback) {
      response = this.handleGlobalCallback(response)
    }
    return response
  }

  handleGlobalError(error) {
    if (this.handleGlobalErrorCallback) {
      error = this.handleGlobalErrorCallback(error)
    }
    return error
  }

  getAppUrl() {
    //return window.location.origin + "/"
    return publicRuntimeConfig.API_HOST
  }
  beforeRequest({ url, data }) {

  }
  afterRequest(result) {
    if (!result) throw new RequestException(-1, "Unable connect to server!")
    const code = _.get(result, "data.code", -1)
    const message = _.get(result, "data.message", "")
    const data = _.get(result, "data.data")
    if (code != 200) {
      throw new RequestException(code, message, data)
    }
    return data
  }

  async get(url, data = {}) {
    this.beforeRequest({ url, data })
    let result = await axios.get(this.getAppUrl() + url, { params: data });
    return this.afterRequest(result)
  }
  async post(url, data) {
    this.beforeRequest({ url, data })
    let result = await axios.post(this.getAppUrl() + url, data);
    return this.afterRequest(result)
  }
  async put(url, data) {
    this.beforeRequest({ url, data })
    let result = await axios.put(this.getAppUrl() + url, data);
    return this.afterRequest(result)
  }
  async delete(url, data) {
    this.beforeRequest({ url, data })
    let result = await axios.delete(this.getAppUrl() + url, { params: data });
    return this.afterRequest(result)
  }
}