import { CommunicationRepository } from "../repositories/communication.repository.js"

export const CommunicationsService = {
  async list(userId) {
    const items = await CommunicationRepository.listByUser(userId)
    return items
  },
  async markRead(id) {
    return CommunicationRepository.markRead(id)
  },
  // demo seed for first-time users
  async seedIfEmpty(userId) {
    const existing = await CommunicationRepository.listByUser(userId)
    if (existing.length) return existing
    const seed = [
      {
        userId,
        channel: "email",
        company: "TechCorp Inc.",
        subject: "Passenger ship hotel staff",
        preview: "We'd like to schedule...",
        read: false,
      },
      {
        userId,
        channel: "message",
        company: "WebSolutions",
        subject: "Offshore Construction",
        preview: "Thanks for your application...",
        read: false,
      },
    ]
    await Promise.all(seed.map((s) => CommunicationRepository.create(s)))
    return CommunicationRepository.listByUser(userId)
  },
}
