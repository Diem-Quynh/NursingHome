const Env = require('@core/Env');

module.exports = {
  HOST: Env.get("HOST", "127.0.0.1"),
  PORT: Env.get("PORT", "3333"),
  DEV_FRONTEND_PORT: Env.get("DEV_FRONTEND_PORT", "3000"),
  CORS_ORIGIN: Env.get("CORS_ORIGIN", "*")
};
