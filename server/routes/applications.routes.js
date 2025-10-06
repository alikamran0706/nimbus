import { Router } from "express"
import { auth } from "../middleware/auth.js"
import { ApplicationsController } from "../controllers/applications.controller.js"

export const applicationsRoutes = Router()
applicationsRoutes.use(auth)
applicationsRoutes.get("/", ApplicationsController.list)
applicationsRoutes.get("/:id", ApplicationsController.get)
