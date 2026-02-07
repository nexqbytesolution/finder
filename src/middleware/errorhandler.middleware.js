class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.success = false;
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.isOperational = true;

    // Correct way to capture stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
