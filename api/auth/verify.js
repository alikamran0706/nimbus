import { AuthController } from "../../server/controllers/auth.controller.js"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  await AuthController.verify(req, res)
}
