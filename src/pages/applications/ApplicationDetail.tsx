"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

export function ApplicationDetail() {
  const [activeTab, setActiveTab] = useState<"description" | "schedule" | "withdraw">("description")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-4">
        <div className="bg-white border-b border-gray-100 p-4 rounded-tr-lg rounded-tl-lg">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-red-600 hover:text-premary-600"
          >
            <img src={'/images/back.png'} alt="Back" className="h-5 w-5" />
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white shadow-sm p-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-3">Passenger ship Hotel Staff</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <img
                    src={'/images/organization.png'}
                    alt="Resume"
                    className="h-[18px] w-[18px]"
                  />
                  <span>TechCorp Inc.</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={'/images/location.png'}
                    alt="Resume"
                    className="h-[18px] w-[18px]"
                  />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
            <span className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium">Interview Scheduled</span>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Application Date</p>
              <p className="font-medium text-gray-900">2023-07-05</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Last Updated</p>
              <p className="font-medium text-gray-900">2023-07-15</p>
            </div>
          </div>
        </div>

        {/* Actions Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions</h2>
          <div className="flex items-center gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-3 px-4 font-medium border-b-2 transition-colors ${
                activeTab === "description"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              📄 Job Description
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`pb-3 px-4 font-medium border-b-2 transition-colors ${
                activeTab === "schedule"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              📅 Schedule Interview
            </button>
            <button
              onClick={() => setActiveTab("withdraw")}
              className={`pb-3 px-4 font-medium border-b-2 transition-colors ${
                activeTab === "withdraw"
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              ❌ Withdraw
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "description" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Passenger ship Hotel Staff</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Passenger ship hotel staff are responsible for delivering high-quality hospitality services onboard
                    cruise liners and passenger ships. They ensure guests have a comfortable and enjoyable experience by
                    managing accommodation
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Strong background in hospitality, customer service, or tourism.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Ability to work in a multicultural and fast-paced environment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Excellent communication and interpersonal skills.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Competitive salary and benefits package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Flexible work arrangements including remote options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Professional development opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Collaborative and innovative work environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Health and wellness programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Application Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Application Timeline</h2>
          <div className="space-y-4">
            {/* Timeline Item 1 */}
            <div className="flex items-center gap-4">
              <img
                    src={'/images/red-clock.png'}
                    alt="Resume"
                    className="h-14 w-14"
                  />
              <div className="flex-1 flex items-center justify-between py-2">
                <p className="text-gray-900">Interview scheduled for July 20th at 2:00 PM</p>
                <span className="text-sm text-gray-500">2023-07-15</span>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex items-center gap-4">
              <img
                    src={'/images/blue-clock.png'}
                    alt="Resume"
                    className="h-14 w-14"
                  />
              <div className="flex-1 flex items-center justify-between py-2">
                <p className="text-gray-900">Application reviewed</p>
                <span className="text-sm text-gray-500">2023-07-10</span>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex items-center gap-4">
              <img
                    src={'/images/green-clock.png'}
                    alt="Resume"
                    className="h-14 w-14"
                  />
              <div className="flex-1 flex items-center justify-between py-2">
                <p className="text-gray-900">Application submitted</p>
                <span className="text-sm text-gray-500">2023-07-05</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between text-sm text-gray-600">
          <p>© 2025 Nimbus. All rights reserved. Version 1.0.0</p>
          <div className="flex items-center gap-6">
            <Link to="/help" className="hover:text-gray-900">
              Help Center
            </Link>
            <Link to="/contact" className="hover:text-gray-900">
              Contact Us
            </Link>
            <Link to="/terms" className="hover:text-gray-900">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
