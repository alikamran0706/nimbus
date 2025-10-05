import { useAppSelector } from "@hooks/redux"

export const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.firstName}!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your account today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Status</h3>
          <p className="text-gray-600">Your account is {user?.isVerified ? "verified" : "pending verification"}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile</h3>
          <p className="text-gray-600">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h3>
          <div className="space-y-2">
            <button className="block w-full text-left text-primary-600 hover:text-primary-700">Update Profile</button>
            <button className="block w-full text-left text-primary-600 hover:text-primary-700">
              Security Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
