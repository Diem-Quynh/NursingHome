const Exception = require("@core/Exception");

class ApiException extends Exception {

  constructor(code="", message = "", data) {
    super(code, message, data, 400);
  }
}

module.exports = ApiException;
