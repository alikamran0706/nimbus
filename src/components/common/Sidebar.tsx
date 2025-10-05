import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-6">
          <nav className="space-y-2">
            <NavLink
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
            <NavLink
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
            <NavLink
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
            <NavLink
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
        </div>
      </aside>
    </div>
  )
}
