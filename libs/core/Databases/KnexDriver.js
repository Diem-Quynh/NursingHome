const dbConfig = require('@config/database');
//const extendQuery = require('@app/Models/QueryBuilder')

const options = {
  client: dbConfig.DB_TYPE,
  connection: {
    host:     dbConfig.DB_HOST,
    port:     dbConfig.DB_PORT,
    user:     dbConfig.DB_USER,
    password: dbConfig.DB_PASS,
    database: dbConfig.DB_NAME,
    multipleStatements: true,
    // timezone: "Asia/Ho_Chi_Minh",
  },
  pool: {
    min: 0, max: dbConfig.DB_POOL_SIZE
  }
};

class Connection {
  constructor() {
  }

  get connection() {
    if (this._connection && !this._connection.connecting) {
      this.connect()
    }
    return this._connection
  }

  set connection(connection) {
    this._connection = connection;
    this._connection.connecting = true
  }

  async connect() {
    console.log("new Database connection")
    try {
      const knex = require('knex');
      if (typeof knex.QueryBuilder.extend != "function") {
        throw Error("Knex version đã cũ, xóa node_modules, yarn.lock và cài lại node modules")
      }

      //extendQuery(knex)
      this.connection = knex(options);
      return this.connection || {}
    } catch (e) {
      throw e
    }
  }
}

module.exports = Connection;
