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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api", routes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.disable("x-powered-by");
  app.use(express.static(path.join(__dirname, '../../dist')));
  
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
}

app.use(errorHandler);

// Database connection with serverless optimization
let isConnected = false;
let connectionPromise = null;

async function initDB() {
  if (!isConnected) {
    if (!connectionPromise) {
      connectionPromise = connectDB(process.env.MONGODB_URI);
    }
    await connectionPromise;
    isConnected = true;
    console.log("[API] DB connected");
  }
}

// Vercel serverless function handler
export default async function handler(req, res) {
  // Initialize DB on first request
  await initDB();
  
  // Pass request to Express app
  return app(req, res);
}