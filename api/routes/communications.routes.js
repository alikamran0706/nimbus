import { Router } from "express"
import { auth } from "../middleware/auth.js"
import { CommunicationsController } from "../controllers/communications.controller.js"

export const communicationsRoutes = Router()
communicationsRoutes.use(auth)
communicationsRoutes.get("/", CommunicationsController.list)
communicationsRoutes.patch("/:id/read", CommunicationsController.markRead)
