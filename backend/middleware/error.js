const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
