const { Model } = require('objection');
const KnexDriver = require('@core/Database')//new (require("../Databases/KnexDriver"))();

Model.knex(KnexDriver.connection)
module.exports = Model;