# Portfolio Web Application

## Overview
This is a full-stack portfolio web application built for Umar Shabbir, a Game Developer and AI Engineer. The application showcases projects, provides contact functionality, and serves as a professional portfolio website with a focus on game development, AR/VR, and AI projects.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite integration

### Key Components

#### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared TypeScript schema definitions between client and server
- **Storage Interface**: Abstract storage interface with in-memory implementation for development
- **Database Tables**:
  - `projects`: Portfolio projects with categories, technologies, and media
  - `contacts`: Contact form submissions
  - `users`: User authentication (basic structure)

#### API Layer
- **RESTful API**: Express.js routes for projects and contact management
- **Endpoints**:
  - `GET /api/projects` - Fetch all projects with optional filtering
  - `GET /api/projects/:id` - Fetch single project details
  - `POST /api/contact` - Submit contact form
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error middleware

#### Frontend Features
- **Pages**: Home, Projects, Project Detail, Resume, Contact
- **Components**: Reusable UI components with shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Navigation**: Fixed header with smooth scrolling
- **Project Showcase**: Categorized project display with filtering
- **Contact Form**: Validated form submission with toast notifications

### Data Flow
1. Client makes API requests using TanStack Query
2. Express server routes handle HTTP requests
3. Storage layer (memory/database) processes data operations
4. Shared schemas ensure type safety across the stack
5. Response data is cached and managed by React Query
6. UI components reactively update based on state changes

### External Dependencies
- **UI Components**: Radix UI primitives via shadcn/ui
- **Styling**: Tailwind CSS with custom design tokens
- **Database**: Neon Database for production PostgreSQL
- **Validation**: Zod for runtime type checking
- **Development**: Replit-specific plugins for development environment

### Deployment Strategy
- **Build Process**: Vite builds client-side assets to `dist/public`
- **Server Bundle**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Client assets served by Express in production
- **Environment**: Configured for both development and production environments
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

The architecture follows a clean separation of concerns with shared types, robust error handling, and a scalable structure suitable for a professional portfolio application.