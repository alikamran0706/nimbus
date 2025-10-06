import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Basic middleware only
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// Simple health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is working' });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Export the handler
export default async function handler(req, res) {
  return app(req, res);
}