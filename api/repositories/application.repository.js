import { ApplicationModel } from "../models/Application.js"

export const ApplicationRepository = {
  listByUser(userId) {
    return ApplicationModel.find({ userId }).sort({ createdAt: -1 })
  },
  getById(id) {
    return ApplicationModel.findById(id)
  },
  create(data) {
    return ApplicationModel.create(data)
  },
}
