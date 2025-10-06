import { useAppDispatch, useAppSelector } from "@hooks/redux"
import { logout } from "@store/slices/authSlice"
import { useNavigate } from "react-router-dom"

type HeaderProps = {
  onMenuClick?: () => void
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/auth/signin")
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={onMenuClick}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
              aria-label="Open sidebar"
              aria-controls="mobile-sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <img src="/src/assets/images/logo.png" alt="Nimbus" className="h-8 w-auto" />
            <span className="text-lg sm:text-xl font-semibold text-gray-900">Nimbus</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-sm text-gray-700">
              Welcome, {user?.firstName} {user?.lastName}
            </span>
            <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
