export * from "./auth"

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}
