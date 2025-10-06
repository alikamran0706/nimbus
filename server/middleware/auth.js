import jwt from "jsonwebtoken"

export function verifyAuth(req, res) {
  const header = req.headers.authorization
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined

  if (!token) {
    res.status(401).json({ message: "Unauthorized" })
    return null
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    return payload.sub // This is usually user ID
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" })
    return null
  }
}
