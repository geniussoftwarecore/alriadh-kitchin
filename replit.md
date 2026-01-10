# AR-HomeKit

## Overview
AR-HomeKit is an Arabic-language website for a home services business (kitchen and window installation, maintenance). Built with a modern React/Express full-stack architecture.

## Tech Stack
- **Frontend**: React 18, Vite, TailwindCSS, Radix UI
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: wouter (lightweight router)
- **State Management**: TanStack React Query

## Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components
│       ├── pages/        # Page components
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API routes
│   ├── db.ts         # Database connection
│   └── storage.ts    # Data access layer
├── shared/           # Shared code
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # Shared API route definitions
└── attached_assets/  # Static assets
```

## Development
- **Start**: `npm run dev`
- **Build**: `npm run build`
- **Database Push**: `npm run db:push`

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port (default: 5000)

## Database Schema
- `contact_requests`: Stores contact form submissions

## Recent Changes
- January 10, 2026: Initial setup and configuration for Replit environment
