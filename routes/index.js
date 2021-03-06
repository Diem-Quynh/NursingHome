const Route = require('@core/Route');
//const AuthMiddleware = require("@app/Middleware/AuthMiddleware");
//const ExtendMiddleware = require("@app/Middleware/ExtendMiddleware");
/**
 * Route:
 * Function:
 *    Method: get, post, put, delete, resource
 *    Route.<method>(path, Action).middleware([middleware1, middleware2])
 *    Ex: Route.get("/user", "UserController.index").middleware([auth])
 *    Route.resource("/user", "UserController")
 *
 *    Route.group(() =>{...}).prefix(path).middleware([middleware1, middleware2])
 *    Ex: Route.group(() =>{
 *        Route.get("/user", "UserController.index")
 *        Route.group("/user", "UserController.index")
 *        require("./setting") //load all router in ./setting.js
 *    }).prefix("/api/v1").middleware([auth])
 */

Route.group(() => {
  require("./api")
}).prefix("/api/v1")

require("./frontend.admin")
