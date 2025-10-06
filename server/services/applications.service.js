import { ApplicationRepository } from "../repositories/application.repository.js"

export const ApplicationsService = {
  async list(userId) {
    const items = await ApplicationRepository.listByUser(userId)
    if (items.length) return items
    // Seed one for demo
    await ApplicationRepository.create({
      userId,
      title: "Passenger ship Hotel Staff",
      company: "TechCorp Inc.",
      location: "New York, NY",
      status: "interview-scheduled",
      applicationDate: new Date("2023-07-05"),
      lastUpdated: new Date("2023-07-15"),
      description:
        "Passenger ship hotel staff are responsible for delivering high-quality hospitality services onboard cruise liners and passenger ships.",
      requirements: ["Strong background in hospitality", "Excellent communication"],
      benefits: ["Competitive salary", "Flexible work arrangements"],
      timeline: [
        { label: "Application submitted", date: new Date("2023-07-05"), color: "green" },
        { label: "Application reviewed", date: new Date("2023-07-10"), color: "blue" },
        { label: "Interview scheduled for July 20th at 2:00 PM", date: new Date("2023-07-15"), color: "red" },
      ],
    })
    return ApplicationRepository.listByUser(userId)
  },

  async get(id) {
    const app = await ApplicationRepository.getById(id)
    return app
  },
}
