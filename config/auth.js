const Env = require('@core/Env');

module.exports = {
  SECRET_KEY: Env.get("SECRET_KEY", "2wsjLSopTjD6WQEztTYIZgCFou8wpLJn"),
  SECRET_KEY_ADMIN: Env.get("SECRET_KEY", "4wsjLSopTjD6WQEztTYIZgCFou8wpLJn"),
  JWT_SMS_KEY: Env.get("JWT_SMS_KEY", "3wsjLSopTjD6WQEztQYIZgCFou8wpLJl"),
  PASSWORD_DEFAULT: '123456',
  JWT_EXPIRE_USER: 86400, //24h
  JWT_REFRESH_TIME: 86400, //24h
  JWT_EXPIRE_ADMIN: 86400, //24h
  JWT_REFRESH_TIME: 86400, //24h
};
