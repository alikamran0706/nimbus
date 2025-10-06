import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "@components/common/Header"
import { Sidebar } from "@components/common/Sidebar"

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
