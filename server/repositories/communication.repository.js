import { CommunicationModel } from "../models/Communication.js"

export const CommunicationRepository = {
  listByUser(userId) {
    return CommunicationModel.find({ userId }).sort({ createdAt: -1 })
  },
  markRead(id) {
    return CommunicationModel.findByIdAndUpdate(id, { read: true }, { new: true })
  },
  create(data) {
    return CommunicationModel.create(data)
  },
}
