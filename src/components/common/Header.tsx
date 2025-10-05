'use client'

import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { logout } from '@store/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/auth/signin')
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-col my-2">
            <img src="/src/assets/images/logo.png" alt="Nimbus" className="h-8 w-auto" />
            <span className="ml-3 text-xl font-semibold text-primary-600">Nimbus</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* <span className="text-sm text-gray-700">
              Welcome, {user?.firstName} {user?.lastName}
            </span>
            <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Sign out
            </button> */}

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                R
              </div>
              <span className="text-gray-700">Candidate</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
