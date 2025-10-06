import { Router } from "express"
import { auth } from "../middleware/auth.js"
import { ResumeController } from "../controllers/resume.controller.js"

export const resumeRoutes = Router()
resumeRoutes.use(auth)
resumeRoutes.get("/", ResumeController.get)
resumeRoutes.put("/", ResumeController.upsert)
