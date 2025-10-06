import { ApplicationsService } from "../services/applications.service.js"

export const ApplicationsController = {
  list: async (req, res) => {
    const data = await ApplicationsService.list(req.userId)
    res.json(data)
  },
  get: async (req, res) => {
    const data = await ApplicationsService.get(req.params.id)
    res.json(data)
  },
}
