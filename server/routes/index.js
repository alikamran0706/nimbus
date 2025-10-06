import { Router } from "express";
import { authRoutes } from "./auth.routes.js";
import { communicationsRoutes } from "./communications.routes.js";
import { applicationsRoutes } from "./applications.routes.js";
import { resumeRoutes } from "./resume.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/communications", communicationsRoutes);
router.use("/applications", applicationsRoutes);
router.use("/resume", resumeRoutes);

export default router;