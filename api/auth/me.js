import { AuthController } from "../../server/controllers/auth.controller"
import { verifyAuth } from "../../server/middleware/auth"


export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const userId = verifyAuth(req, res)
  if (!userId) return 

  await AuthController.me(req, res, userId)
}
