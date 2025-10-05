import { ResumeService } from "../services/resume.service.js"

export const ResumeController = {
  get: async (req, res) => {
    const data = await ResumeService.get(req.userId)
    res.json(data)
  },
  upsert: async (req, res) => {
    const data = await ResumeService.upsert(req.userId, req.body)
    res.json(data)
  },
}
