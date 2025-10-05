import { CommunicationsService } from "../services/communications.service.js"

export const CommunicationsController = {
  list: async (req, res) => {
    const data = await CommunicationsService.seedIfEmpty(req.userId)
    res.json(data)
  },
  markRead: async (req, res) => {
    const data = await CommunicationsService.markRead(req.params.id)
    res.json(data)
  },
}
