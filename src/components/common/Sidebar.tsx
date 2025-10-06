import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "@hooks/redux"
import { logout } from "@store/slices/authSlice"

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="space-y-2">
      <NavLink
        onClick={onNavigate}
        to="/applications"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center gap-3 px-4 py-3 bg-red-50 text-red-600 rounded-lg font-medium'
            : 'flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg'
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={isActive ? '/images/active-application.png' : '/images/application.png'}
              alt="Applications"
              className="h-5 w-5"
            />
            Applications
          </>
        )}
      </NavLink>
      <NavLink onClick={onNavigate}
        to="/resume"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center gap-3 px-4 py-3 bg-red-50 text-red-600 rounded-lg font-medium'
            : 'flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg'
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={isActive ? '/images/active-resume.png' : '/images/resume.png'}
              alt="Resume"
              className="h-[18px] w-[18px]"
            />
            Resume
          </>
        )}
      </NavLink>
      <NavLink onClick={onNavigate}
        to="/communications"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center gap-3 px-4 py-3 bg-red-50 text-red-600 rounded-lg font-medium'
            : 'flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg'
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={isActive ? '/images/active-message.png' : '/images/message.png'}
              alt="Resume"
              className="h-[18px] w-[18px]"
            />
            Message
          </>
        )}
      </NavLink>
      <NavLink onClick={onNavigate}
        to="/settings"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center gap-3 px-4 py-3 bg-red-50 text-red-600 rounded-lg font-medium'
            : 'flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg'
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={isActive ? '/images/active-setting.png' : '/images/setting.png'}
              alt="Resume"
              className="h-[18px] w-[18px]"
            />
            Setting
          </>
        )}
      </NavLink>
    </nav>
  )
}

function SidebarFooter({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="mt-auto border-t border-gray-200 p-4">
      <button
        onClick={onLogout}
        className="w-full text-left text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        Sign out
      </button>
    </div>
  )
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    navigate("/auth/signin")
    onClose?.()
  }

  return (
    <>
      {/* Mobile overlay + drawer */}
      <div className={`md:hidden fixed inset-0 z-40 ${isOpen ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={onClose}
          aria-hidden="true"
        />
        <aside
          id="mobile-sidebar"
          className={`absolute inset-y-0 left-0 w-72 bg-white border-r border-gray-200 shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 h-14 border-b">
              <span className="text-base font-semibold">Menu</span>
              <button
                onClick={onClose}
                className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Close sidebar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95L5.05 3.636 10 8.586z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <NavList onNavigate={onClose} />
            </div>
            <SidebarFooter onLogout={handleLogout} />
          </div>
        </aside>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 bg-white shadow-sm border-r border-gray-200 min-h-[calc(100vh-4rem)]">
        <div className="flex h-full w-full flex-col">
          <div className="flex-1 overflow-y-auto">
            <NavList />
          </div>
          <SidebarFooter onLogout={handleLogout} />
        </div>
      </aside>
    </>
  )
}
