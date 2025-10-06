import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
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

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all handler for SPA
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use(errorHandler);

// Database connection
let isConnected = false;
async function initDB() {
  if (!isConnected) {
    await connectDB(process.env.MONGODB_URI);
    isConnected = true;
    console.log("[API] DB connected");
  }
}

// Single serverless function export
export default async function handler(req, res) {
  try {
    await initDB();
  } catch (error) {
    console.error('DB connection error:', error);
  }
  
  return app(req, res);
}