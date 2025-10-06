import { ResumeRepository } from "../repositories/resume.repository.js"

export const ResumeService = {
  get(userId) {
    return ResumeRepository.getByUser(userId)
  },
  upsert(userId, data) {
    return ResumeRepository.upsert(userId, data)
  },
}
