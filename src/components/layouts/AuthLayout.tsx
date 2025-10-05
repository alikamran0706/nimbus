import { Outlet, Navigate } from "react-router-dom"
import { useAppSelector } from "@hooks/redux"

export const AuthLayout = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  // Redirect to dashboard if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Outlet />
      </div>
    </div>
  )
}
