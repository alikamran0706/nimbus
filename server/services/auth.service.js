import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { z } from "zod"
import { UserRepository } from "../repositories/user.repository.js"

const RegisterSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["candidate", "recruiter"]).default("candidate"),
  country: z.string().optional(),
  nationality: z.string().optional(),
  dateOfBirth: z.string().optional(),
})

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

function sign(userId) {
  return jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: "7d" })
}

export const AuthAppService = {
  async register(payload) {
    const data = RegisterSchema.parse(payload)

    const exists = await UserRepository.findByEmail(data.email)
    if (exists) throw new Error("Email already exists")

    const passwordHash = await bcrypt.hash(data.password, 10)
    const user = await UserRepository.create({ ...data, passwordHash, isVerified: false })
    console.log(user, 'sdsd', 'ddddddddd')

    return { user: toClient(user) }
  },

  async login(payload) {
    const { email, password } = LoginSchema.parse(payload)
    const user = await UserRepository.findByEmail(email)
    if (!user) throw new Error("Invalid credentials")
    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) throw new Error("Invalid credentials")
    const token = sign(user._id)
    return { user: toClient(user), token }
  },

  async verify(email, code) {
    const user = await UserRepository.verifyByEmail(email, code);

    const token = sign(user._id);

    return { user: toClient(user), token };
  },

  async resendVerificationCode(email) {
    return await UserRepository.resend(email);
  },

  async me(userId) {
    const user = await UserRepository.findById(userId)
    if (!user) throw new Error("User not found")
    return toClient(user)
  },
}

function toClient(u) {
  const { _id, firstName, lastName, email, isVerified, country, nationality, dateOfBirth, role, referenceNo } = u
  return {
    _id,
    firstName,
    lastName,
    email,
    isVerified,
    country,
    nationality,
    dateOfBirth,
    role,
    referenceNo,
  }
}
