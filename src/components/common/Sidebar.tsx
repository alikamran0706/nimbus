import { NavLink } from "react-router-dom"

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profile", href: "/profile" },
  { name: "Resume", href: "/resume" },
  { name: "Communications", href: "/communications" },
  { name: "Settings", href: "/settings" },
]

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="px-4 py-6">
      <ul className="space-y-2">
        {navigation.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.href}
              onClick={onNavigate}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? "bg-red-50 text-red-700" : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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
          <div className="flex items-center justify-between px-4 h-14 border-b">
            <span className="text-base font-semibold">Menu</span>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
              aria-label="Close sidebar"
            >
              X
            </button>
          </div>
          <NavList onNavigate={onClose} />
        </aside>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 bg-white shadow-sm border-r border-gray-200 min-h-[calc(100vh-4rem)]">
        <NavList />
      </aside>
    </>
  )
}
