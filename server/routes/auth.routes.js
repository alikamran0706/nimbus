import { Router } from "express"
import { AuthController } from "../controllers/auth.controller.js"
import { auth } from "../middleware/auth.js"

export const authRoutes = Router()
authRoutes.post("/register", AuthController.register)
authRoutes.post("/login", AuthController.login)
authRoutes.post("/verify", AuthController.verify)
authRoutes.get("/me", auth, AuthController.me)
authRoutes.post("/resend", AuthController.resend)
