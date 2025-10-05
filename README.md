# Nimbus Enterprise App

A modern React application built with Vite, TypeScript, and Tailwind CSS featuring enterprise-grade authentication and routing.

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with hooks and concurrent features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔒 **Authentication** - Complete auth flow with email verification
- 🛡️ **Private Routes** - Protected routes with role-based access
- 🗂️ **Redux Toolkit** - State management with RTK
- 📱 **Responsive Design** - Mobile-first responsive design
- 🎯 **TypeScript** - Full type safety
- 📏 **ESLint & Prettier** - Code formatting and linting
- 🏗️ **Enterprise Structure** - Scalable folder organization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd nimbus-enterprise-app
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Copy environment variables
\`\`\`bash
cp .env.example .env
\`\`\`

4. Start the development server
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

\`\`\`
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable components
│   ├── common/      # Common components
│   ├── layouts/     # Layout components
│   └── ui/          # UI components
├── hooks/           # Custom React hooks
├── pages/           # Page components
│   ├── auth/        # Authentication pages
│   ├── dashboard/   # Dashboard pages
│   ├── profile/     # Profile pages
│   └── settings/    # Settings pages
├── services/        # API services
├── store/           # Redux store and slices
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── App.tsx          # Main App component
└── main.tsx         # Application entry point
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## Authentication

The app includes a complete authentication system with:

- **Sign In** - Email/password login with social options
- **Sign Up** - User registration with form validation
- **Email Verification** - 6-digit code verification
- **Private Routes** - Protected routes requiring authentication
- **Auto-redirect** - Automatic redirection based on auth state

### Test Credentials

For development, use these test credentials:
- Email: `user@example.com`
- Password: `password`
- Verification Code: `123456`

## Routing

The application uses React Router v6 with:

- **Nested Routes** - Organized route structure
- **Private Routes** - Authentication-protected routes
- **Layout Routes** - Shared layouts for auth and main app
- **Auto-redirect** - Smart redirects based on authentication state

## State Management

Redux Toolkit is configured with:

- **Auth Slice** - User authentication state
- **Async Thunks** - API calls with loading states
- **Typed Hooks** - Type-safe Redux hooks
- **Persistence** - Token persistence in localStorage

## Styling

Tailwind CSS is configured with:

- **Custom Theme** - Brand colors and design tokens
- **Component Classes** - Reusable component styles
- **Responsive Design** - Mobile-first breakpoints
- **Dark Mode Ready** - CSS variables for theming

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
