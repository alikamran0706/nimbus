import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Message {
  id: string
  company: string
  type: string
  position: string
  preview: string
  date: string
  isRead: boolean
  isStarred: boolean
  icon: 'message' | 'email'
}

const mockMessages: Message[] = [
  {
    id: '1',
    company: 'TechCorp Inc.',
    type: 'Message',
    position: 'Passenger ship Hotel Staff',
    preview:
      "We'd like to schedule an interview with you for the Passenger ship Hotel Staff position.",
    date: '2025-08-01',
    isRead: false,
    isStarred: false,
    icon: 'message',
  },
  {
    id: '2',
    company: 'WebSolutions',
    type: 'Message',
    position: 'Offshore Construction',
    preview: "Thanks for your application. We'll be in touch soon.",
    date: '2025-07-31',
    isRead: true,
    isStarred: false,
    icon: 'message',
  },
  {
    id: '3',
    company: 'hrgltechcorp.com',
    type: 'Email',
    position: 'Interview Confirmation',
    preview: "We're looking forward to meeting you on July 20th...",
    date: '2023-07-15',
    isRead: false,
    isStarred: false,
    icon: 'email',
  },
  {
    id: '4',
    company: 'WebSolutions Recruiter',
    type: 'WhatsApp',
    position: 'Quick Question',
    preview: 'Hi John, I had a quick question about your availability...',
    date: '2023-07-14',
    isRead: false,
    isStarred: false,
    icon: 'message',
  },
  {
    id: '5',
    company: 'notifications@deeper.com',
    type: 'Email',
    position: 'Application Received',
    preview: 'Thank you for applying to the Offshore Construction position...',
    date: '2023-07-11',
    isRead: false,
    isStarred: false,
    icon: 'email',
  },
  {
    id: '6',
    company: 'CTRO',
    type: 'Message',
    position: 'Renewable energy',
    preview: "Congratulations! We'd like to offer you the Renewable energy position.",
    date: 'Jul 18',
    isRead: false,
    isStarred: false,
    icon: 'message',
  },
  {
    id: '7',
    company: 'InnovateTech',
    type: 'Message',
    position: 'Renewable energy',
    preview: "We regret to inform you that we've decided to move forward with other candidates.",
    date: 'Jul 05',
    isRead: true,
    isStarred: false,
    icon: 'message',
  },
]

export function Communications() {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [searchQuery, setSearchQuery] = useState('')

  const markAsRead = (id: string) => {
    setMessages(messages.map(msg => (msg.id === id ? { ...msg, isRead: true } : msg)))
  }

  const markAllAsRead = () => {
    setMessages(messages.map(msg => ({ ...msg, isRead: true })))
  }

  const toggleStar = (id: string) => {
    setMessages(messages.map(msg => (msg.id === id ? { ...msg, isStarred: !msg.isStarred } : msg)))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-4 max-w-7xl mx-auto">
        {/* Header Navigation */}
        <div className="bg-white border-b border-gray-100 p-4 rounded-tr-lg rounded-tl-lg">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 text-sm sm:text-base"
          >
            <img src={'/images/back.png'} alt="Back" className="h-5 w-5" />
            Back to Dashboard
          </Link>
        </div>

        {/* Main Panel */}
        <div className="bg-white shadow-sm p-4 sm:p-6 rounded-b-lg">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Communications</h1>
              <p className="text-gray-500 text-sm sm:text-base">
                All your messages, emails, and notifications in one place
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <button
                onClick={markAllAsRead}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-300 w-full sm:w-auto"
              >
                Mark All Read
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 w-full sm:w-auto">
                Compose
              </button>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
            <div className="relative w-full md:flex-1">
              <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search communications"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Type: All
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Filter All
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-lg border ${message.isRead ? 'bg-white border-gray-200' : 'bg-red-50 border-red-100'
                  }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 ${message.icon === 'email' ? 'bg-blue-100' : 'bg-green-100'
                    }`}
                >
                  {message.icon === 'email' ? (
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  )}
                </div>

                {/* Message Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-gray-900">{message.company}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {message.type}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{message.date}</span>
                  </div>
                  <p className="font-medium text-gray-900 mb-1">{message.position}</p>
                  <p className="text-gray-600 text-sm">{message.preview}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => toggleStar(message.id)}
                    className="p-1 hover:bg-gray-100 rounded text-sm"
                  >
                    ⭐
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded text-sm">🗑️</button>
                </div>

                {!message.isRead && (
                  <button
                    onClick={() => markAsRead(message.id)}
                    className="text-sm text-red-600 hover:text-red-700 whitespace-nowrap"
                  >
                    ✓ Mark as read
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 pt-6 border-t border-gray-200 gap-2">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              Showing 1 to {messages.length} of {messages.length} results
            </p>
            <div className="flex items-center justify-center gap-2">
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">⬅️</button>
              <button className="px-3 py-1 bg-red-600 text-white rounded">1</button>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">➡️</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p className="text-center sm:text-left">© 2025 Nimbus. All rights reserved. Version 1.0.0</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/help" className="hover:text-gray-900">Help Center</Link>
            <Link to="/contact" className="hover:text-gray-900">Contact Us</Link>
            <Link to="/terms" className="hover:text-gray-900">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
