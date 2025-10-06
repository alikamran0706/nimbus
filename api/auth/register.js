import { AuthController } from "../../server/controllers/auth.controller"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  await AuthController.register(req, res)
}