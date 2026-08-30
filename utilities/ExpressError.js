class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    res.statusCode = statusCode;
    res.message = message;
  }
}

module.exports = ExpressError;
