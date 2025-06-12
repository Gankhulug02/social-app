// catch 404 and forward to error handler
function notFound(req, res, next) {
  res.status(404);
  const err = new Error(`Not Found = ${req.originalUrl}`);
  next(err);
}

// global error handler
function errorHandler(err, req, res, next) {
  const statusCode = req.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
}

module.exports = { notFound, errorHandler };
