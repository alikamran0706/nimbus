import dotenv from "dotenv";
import path from "path";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from "url";

import { connectDB } from "./api/db/connect.js";
import routes from "./api/routes/index.js";
import { errorHandler } from "./api/middleware/error-handler.js";

// Needed for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

// Serve frontend in production (optional if Vercel handles static separately)
if (process.env.NODE_ENV === "production") {
  app.disable("x-powered-by");
  const dist = path.resolve(__dirname, "dist"); // ⚠ Adjust path if needed
  app.use(express.static(dist));

  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    return res.sendFile(path.join(dist, "index.html"));
  });
}

app.use(errorHandler);

// ✅ Only connect DB once
let isConnected = false;
async function initDB() {
  if (!isConnected) {
    await connectDB(process.env.MONGODB_URI);
    isConnected = true;
    console.log("[API] DB connected");
  }
}

await initDB();

// ✅ Export app as default (Vercel needs this)
export default app;
