import dotenv from "dotenv";
import path from "path";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from "url";

import { connectDB } from "./db/connect.js";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error-handler.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Mount API under /api
app.use("/api", routes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.disable("x-powered-by");
  const dist = path.resolve(__dirname, "../dist");
  app.use(express.static(dist));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    return res.sendFile(path.join(dist, "index.html"));
  });
}

// Error handling
app.use(errorHandler);

// Connect to DB (once per cold start)
const MONGODB_URI = process.env.MONGODB_URI;

connectDB(MONGODB_URI)
  .then(() => {
    console.log("[API] DB connected successfully");
  })
  .catch((err) => {
    console.error("[API] DB connection failed", err);
  });

// ✅ Export the Express app for Vercel serverless
export default app;
