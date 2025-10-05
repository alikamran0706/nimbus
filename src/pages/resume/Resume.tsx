import type React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Resume() {
  const [formData, setFormData] = useState({
    referenceNo: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    contactNo: '',
    nationality: '',
    experience: '',
    industry: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <div className="flex-1">
        {/* Content */}
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
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Resume</h1>
                <p className="text-gray-500">Update your resume to improve job matches</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                  <img src={'/images/preview.png'} alt="Back" className="h-4 w-4" /> Preview
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2">
                  <img src={'/images/upload.png'} alt="Back" className="h-5 w-5" /> Upload New
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Reference No */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Reference No</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="referenceNo"
                  value={formData.referenceNo}
                  onChange={handleChange}
                  placeholder="Enter reference number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* First Name */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Last Name */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Date of Birth */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Date Of Birth</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="mm/dd/yyyy"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Email Address */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Contact No */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Contact No</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Nationality */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Nationality</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select nationality</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
              </div>

              {/* Minimum Experience */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Minimum Experience</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              {/* Industry */}
              <div className='border border-gray-200/70 p-4 rounded-lg'>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Industry</label>
                  <img src={'/images/pencil.png'} alt="Back" className="h-4 w-4" />
                </div>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hospitality">Hospitality</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12 py-6">
          <div className="px-8 flex items-center justify-between text-sm text-gray-600">
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
    </div>
  )
}
