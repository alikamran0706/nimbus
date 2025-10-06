export function errorHandler(err, _req, res, _next) {
  const status = err.status || 400
  res.status(status).json({ message: err.message || "Unexpected error" })
}
