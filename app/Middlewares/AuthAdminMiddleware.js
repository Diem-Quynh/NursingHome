const to = require("await-to-js").default;

const BaseMiddleware = require("./BaseMiddleware");
const Auth = require("@core/Auth");
const authConfig = require('@config/auth')
const Cookies = require('universal-cookie')

class AuthMiddleware extends BaseMiddleware {
  constructor(request, response, next) {
    super(request, response, next);
    this.cookies = new Cookies(request.headers.cookie);
    this.checkToken().then(res => {
      if (res.error) {
        console.log(res.error)
        response.redirect('/admin/login')
        return;
      }
      next();
    }).catch(err => {
      console.log(err)
      return response.status(401).json({error: err})
    })
  }

  async checkToken() {
    let token = this.cookies.get('token')
    let [error, result] = await to(Auth.verify(token, {
      key: authConfig['SECRET_KEY']
    }));
    if (error) return {error: error.message};
    /* if(result.type !== "admin"){
      return this.response.error(403, "not access")
    } */
    if(result.exp - Date.now()/1000 < authConfig['JWT_REFRESH_TIME']){
      let newToken = Auth.generateJWT({
        _id: result.id,
        username: result.username,
        groups: result.groupId,
        permissions: result.permissions,
        type: result.type
      }, {
        key: authConfig['SECRET_KEY'],
        expiresIn: authConfig['JWT_EXPIRE_USER']
      });
      this.response.set('Access-Control-Expose-Headers', 'access-token')
      this.response.set('access-token', newToken);
    }
    this.request.auth = this.makeAuthObject(result);
    return {token};
  }

  makeAuthObject(tokenData) {
    return {
      ...tokenData
    }
  }
}

module.exports = AuthMiddleware.export();
