import jwt from "jsonwebtoken"

export function auth(req, res, next) {
  const header = req.headers.authorization
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined
  if (!token) return res.status(401).json({ message: "Unauthorized" })
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = payload.sub
    next()
  } catch {
    return res.status(401).json({ message: "Unauthorized" })
  }
}
