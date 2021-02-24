const to = require("await-to-js").default;

const BaseMiddleware = require("./BaseMiddleware");
const Auth = require("@core/Auth");
const authConfig = require('@config/auth')
const Cookies = require('universal-cookie')
const _ = require('lodash')

const charToNum = { C: 8, R: 4, U: 2, D: 1 }

const crudToDec = (text) => {
  return text.toUpperCase().split("").reduce((total, char) => { return total + charToNum[char] || 0 }, 0)

}
const decToCrud = (dec) => {
  let result = "";
  for (let char in charToNum) {
    if ((dec & charToNum[char]) == charToNum[char]) result += char
  }
  return result
}
const hasPermission = (requirePermission, userPermission) => {
  return (userPermission & requirePermission) === requirePermission
}

const PermissionMiddleware = (permissions = {}) => (request, response, next) => {
  const auth = request.auth
  if (!auth) {
    return response.status(401).json({ code: 9998, error: "Authentication required before checking permissions." })
  }

  const userPermissions = auth.permissions
  if (!userPermissions) {
    return response.status(403).json({code: 9997, error: 'There is no permission data in the token.' })
  }

  let permissionArray = []
  let status = false
  for (let permission in permissions) {
    const userPermission = userPermissions[permission] || 0
    const rootPermission = userPermissions['root'] || 0
    const requirePermission = crudToDec(permissions[permission])
    if (hasPermission(requirePermission, userPermission) || hasPermission(requirePermission, rootPermission)) {
      status = true
      break
    }
    permissionArray.push({permission:permission, requirePermission:requirePermission, userPermission:userPermission})
  }
  
  if(!status){
    let _error = 'Not enough permissions. Required: root'
    for (const iterator of permissionArray) {
      _error += `, or ${iterator.permission}: [${decToCrud(iterator.requirePermission)}] but user has: [${decToCrud(iterator.userPermission)}]`
    }
    return response.status(403).json({ code: 9997, error: _error })
  }
  
  next()
}

const PermissionMethodMiddleware = (methods) => (request, response, next) => {
  const method = request.method.toUpperCase();
  const permissions = methods[method] || {}
  return PermissionMiddleware(permissions)(request, response, next);
}

const PermissionResourceMiddleware = (permissions) => (request, response, next) => {
  let methods = { "POST": "C", "GET": "R", "PUT": "U", "DELETE": "D" };
  let newPermissions = {
    GET: {}, PUT: {}, POST: {}, DELETE: {}
  }

  for (let permission of permissions) {
    for (let method in methods) {
      newPermissions[method] = {
        ...newPermissions[method],
        [permission]: methods[method]
      }
    }
  }
  return PermissionMethodMiddleware(newPermissions)(request, response, next)
}


module.exports = {
  permission: PermissionMiddleware,
  permissionMethod: PermissionMethodMiddleware,
  permissionResource: PermissionResourceMiddleware
}
