import { connectDB } from "../server/db/connect.js"

export default async function handler(req, res) {
  try {
    const conn = await connectDB()
    res.status(200).json({ status: 'OK', db: conn.name })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Database connection failed' })
  }
}