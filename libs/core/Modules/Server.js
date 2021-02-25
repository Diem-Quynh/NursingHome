const next = require('next')
//const Database = require("@core/Database");
let bodyParser = require('body-parser');
const cors = require('cors');
const config = require('@config/server');
const Router = require('@core/Route');
const Database = require('@core/Database')

const nextApp = next({ dev: __ISDEV__ })
const httpLib = require('http')
const expressLib = require('express');
const express = expressLib()
let handle = nextApp.getRequestHandler()
const http = httpLib.createServer(express)
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('@themes/modules/I18n')
const path = require('path')
class Server {

  static async dbConnect() {
    if (process.env.MODE !== "dev-client") {
      await Database.connect();
    }
  }

  static async nextStart() {
    if (process.env.MODE !== "dev-server") {
      await nextApp.prepare();
      Server.nextApp = nextApp;
    }
    else {
      handle = (request, response) => {
        response.status(404).send("MODE is dev server only, Route not exist.")
      }
      Server.nextApp = { render: handle }
    }
  }
  static async start() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.dbConnect();
        await this.nextStart();
        express.use(bodyParser.urlencoded({ extended: true }));
        express.use(bodyParser.json({
          limit: '50mb'
        }));
        express.use(cors({
          origin: config.CORS_ORIGIN
        }));
        express.use(nextI18NextMiddleware(nextI18next))

        this.hooksBeforeStart.map(hook => {
          hook({ http, express, next: Server.nextApp })
        });
        express.use(Router.build())
        console.log("rebuild routes.json")
        Router.export(`${__ROOTDIR__}/themes/_routes.json`);
        express.all('*', handle)
        const port = process.env.MODE == "dev-client" ? config.DEV_FRONTEND_PORT : config.PORT
        if (process.env.MODE == "dev-client") {
          this.preBuildClient()
        }
        http.listen(port, () => {
          console.log(`server stated: ${port}`);
          resolve({ http, express, next: Server.nextApp })
        })
      }
      catch (ex) {
        console.error(ex.stack)
        reject(ex);
        process.exit(1)
      }
    })
  }

  static async preBuildClient() {
    let pRoutes = []
    if (process.env.PREBUILD == '1') {
      const routes = Router.export()

      console.log("preBuildClient")
      for (let name in routes) {
        let route = routes[name]
        if (!route.action || route.action.substr(0, 6) !== "pages/") continue;
        pRoutes.push(Server.nextApp.hotReloader.onDemandEntries.ensurePage(route.action.substr(5)))
      }
    }
    return await Promise.all(pRoutes)
  }
}
Server.hooksBeforeStart = []

module.exports = Server
