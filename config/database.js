const Env = require('@core/Env');

module.exports = {
  DB_TYPE: Env.get("DB_TYPE", "mysql"),
  DB_HOST: Env.get("DB_HOST", "127.0.0.1"),
  DB_PORT: Env.get("DB_PORT", "3307"),
  DB_USER: Env.get("DB_USER", "root"),
  DB_PASS: Env.get("DB_PASS", ""),
  DB_NAME: Env.get("DB_NAME", "nursing_home_management"),
  DB_POOL_SIZE: Env.get("DB_POOL_SIZE", 10),
};
