import { ResumeModel } from "../models/Resume.js"

export const ResumeRepository = {
  getByUser(userId) {
    return ResumeModel.findOne({ userId })
  },
  upsert(userId, data) {
    return ResumeModel.findOneAndUpdate({ userId }, { ...data, userId }, { upsert: true, new: true })
  },
}
