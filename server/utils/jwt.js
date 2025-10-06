const jwt = require("jsonwebtoken")

const signToken = (payload, opts = {}) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d", ...opts })

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET)

module.exports = { signToken, verifyToken }
