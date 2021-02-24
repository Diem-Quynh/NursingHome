const Exception = require("@core/Exception");

class DatabaseException extends Exception {

  constructor(message = "", data) {
    super(9995, message, data);
  }
}

module.exports = DatabaseException;
