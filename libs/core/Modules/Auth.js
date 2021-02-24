const jwt = require("jsonwebtoken");
const authConfig = require("@config/auth");

class Auth {
  static generateJWT(data, options = {}) {
    let {key, ...otherOptions} = options
    key = key || authConfig.SECRET_KEY
    return jwt.sign(data, key, otherOptions)
  }
  static async decodeJWT(token, options = {}){
    let {key} = options
    key = key || authConfig.SECRET_KEY
    let result = await jwt.verify(token, key);
    return result
  }
  static async verify(token, options = {}) {
    let {key} = options
    key = key || authConfig.SECRET_KEY
    let result = await jwt.verify(token, key);
    return result
  }
}

module.exports = Auth
