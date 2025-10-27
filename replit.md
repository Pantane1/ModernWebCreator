# Pantane Developer Portfolio

## Overview

This is a modern, full-stack developer portfolio website for Pantane (Martin Wamuhu), a Kenyan web developer and designer. The application is built as a single-page portfolio showcasing skills, projects, blog posts, and contact information with a focus on dark-mode aesthetics, smooth animations, and professional presentation.

The portfolio features a hero section, about section, skills showcase, project gallery, blog preview, and contact form with backend persistence. The application uses a modern tech stack with React for the frontend, Express for the backend, and includes database support for storing contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**UI Component System**: shadcn/ui components built on Radix UI primitives, providing a comprehensive set of accessible, customizable components. The design system uses a "new-york" style variant with Tailwind CSS for styling.

**Styling Approach**: 
- Tailwind CSS with custom configuration for theme colors, border radius, and spacing
- CSS custom properties for theming (light/dark mode support)
- Design tokens defined in `client/src/index.css` for consistent elevation, borders, and color schemes
- Typography uses Space Grotesk and JetBrains Mono fonts loaded from Google Fonts

**Routing**: wouter for lightweight client-side routing. The app has a simple route structure with a main portfolio page and 404 fallback.

**State Management**: 
- React Query (@tanstack/react-query) for server state and data fetching
- Local component state with React hooks
- Theme management via custom ThemeProvider context

**Form Handling**: React Hook Form with Zod validation for type-safe form validation, particularly for the contact form.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Structure**: RESTful API endpoints:
- `POST /api/contact` - Accepts contact form submissions with validation
- `GET /api/contacts` - Retrieves all contact submissions

**Data Validation**: Zod schemas shared between client and server (in `shared/schema.ts`) ensure consistent validation across the stack. The `insertContactSchema` validates name, email, and message fields.

**Development Setup**: 
- Vite middleware integration for hot module replacement in development
- Custom error handling and request logging middleware
- Development-only Replit plugins for debugging and cartography

### Data Storage Solutions

**Database**: Configured for PostgreSQL via Drizzle ORM with Neon serverless driver (`@neondatabase/serverless`).

**ORM**: Drizzle ORM provides type-safe database queries and migrations. Schema is defined in `shared/schema.ts` with tables for:
- `users` - User authentication (username, password)
- `contacts` - Contact form submissions (name, email, message, timestamp)

**Migration Strategy**: Drizzle Kit for schema migrations, configured to output to `./migrations` directory.

**Fallback Storage**: In-memory storage implementation (`MemStorage` class) provides a development fallback when database is not available. Uses JavaScript Maps to store users and contacts with UUID generation.

**Design Decision**: The dual storage approach (database + in-memory fallback) allows development without requiring database setup, with easy switching to persistent storage in production.

### Component Architecture

**Page Structure**: Single-page application with section-based layout:
- Navigation (sticky header with scroll effects)
- Hero (animated introduction with gradient backgrounds)
- About (multi-card layout with icons and descriptions)
- Skills (categorized skill display with visual indicators)
- Projects (grid of project cards with hover effects)
- Blog (preview cards for blog posts)
- Contact (form with backend integration)
- Footer (links and social media)
- Back-to-top button (scroll-triggered)

**Design Philosophy**: Component composition with reusable UI primitives. Each section is self-contained with its own styling and animations. Heavy use of Radix UI for accessibility and shadcn/ui for consistent design patterns.

### Theme System

**Dark Mode First**: Application defaults to dark theme with support for light mode toggle.

**Implementation**: Custom ThemeProvider using React Context stores theme preference in localStorage and applies CSS class to document root. Theme toggle button in navigation allows switching between modes.

**Color System**: HSL-based color tokens with CSS custom properties allow dynamic theming. Separate color definitions for light and dark modes in `client/src/index.css`.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive collection of accessible component primitives (`@radix-ui/react-*` packages)
- **shadcn/ui**: Pre-built components built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **react-icons**: Additional icon sets (specifically SiWhatsapp for WhatsApp icon)
- **embla-carousel-react**: Carousel/slider functionality

### Development Tools
- **Vite**: Build tool and development server with plugin ecosystem
- **TypeScript**: Type safety across client and server
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins
- **ESBuild**: Fast bundling for production server build

### Data & Forms
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Schema validation for both frontend forms and backend API
- **@hookform/resolvers**: Bridges React Hook Form with Zod validation

### Styling Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional class name composition
- **date-fns**: Date formatting and manipulation

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation
- **connect-pg-simple**: PostgreSQL session store (included but not actively used in current implementation)

### Server Dependencies
- **Express**: Web server framework
- **cmdk**: Command menu component (included but not visibly used in portfolio)

### Fonts
- **Google Fonts**: Space Grotesk (primary) and JetBrains Mono (code/technical highlights) loaded via link tags in `client/index.html`

### Design References
The project includes design guidelines (`design_guidelines.md`) referencing modern portfolio aesthetics inspired by Awwwards winners, Stripe developer docs, and Linear's interface design, emphasizing dark sophistication, purposeful motion, and performance-first implementation.