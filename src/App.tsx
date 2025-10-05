import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getCurrentUser } from '@store/slices/authSlice'
import { AuthLayout } from '@components/layouts/AuthLayout'
import { MainLayout } from '@components/layouts/MainLayout'
import { PrivateRoute } from '@components/common/PrivateRoute'
import { SignIn } from '@pages/auth/SignIn'
import { SignUp } from '@pages/auth/SignUp'
import { VerifyEmail } from '@pages/auth/VerifyEmail'
import { Dashboard } from '@pages/dashboard/Dashboard'
import { Profile } from '@pages/profile/Profile'
import { Settings } from '@pages/settings/Settings'
import { ForgotPassword } from './pages/auth/ForgotPassword'
import { clearAlert } from './store/slices/alertSlice'
import { Resume } from './pages/resume/Resume'
import { Communications } from './pages/communications/Communications'
import { ApplicationDetail } from './pages/applications/ApplicationDetail'

function App() {
  const dispatch = useAppDispatch()
  const { token, isLoading } = useAppSelector(state => state.auth)
  const alert = useAppSelector(state => state.alert)

  console.log(token,'tokentoken')

  useEffect(() => {
    if (alert.message) {
      switch (alert.type) {
        case 'success':
          toast.success(alert.message)
          break
        case 'error':
          toast.error(alert.message)
          break
        case 'warning':
          toast.warning(alert.message)
          break
        default:
          toast.info(alert.message)
          break
      }
      dispatch(clearAlert())
    }
  }, [alert, dispatch])

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser())
    }
  }, [dispatch, token])

  if (isLoading && token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-email" element={<VerifyEmail />} />
        </Route>

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="resume" element={<Resume />} />
          <Route path="communications" element={<Communications />} />
          <Route path="applications" element={<ApplicationDetail />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
