# NaijaMart - Nigerian E-commerce Platform

## Overview

NaijaMart is a full-stack e-commerce platform specializing in Nigerian farm-to-table delivery of fresh, organic produce. The application connects local farmers with consumers, offering a curated selection of Nigerian products including rice, yam, cassava, catfish, and other local staples. The platform features flash sales, shopping cart functionality, user favorites, and a modern, responsive interface with futuristic design elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **UI Framework**: Shadcn/UI components built on Radix UI primitives for accessibility and comprehensive component library
- **Styling**: Tailwind CSS with custom design tokens featuring a futuristic dark theme with neon cyan and magenta accents
- **State Management**: React Context API for cart and favorites management, TanStack Query for server state management
- **Animations**: Framer Motion for smooth interactions, micro-animations, and complex UI transitions
- **Build Tool**: Vite for fast development builds and optimized production bundles

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Storage Pattern**: Interface-based storage layer with in-memory implementation for development and PostgreSQL for production
- **Session Management**: Express sessions with PostgreSQL store using connect-pg-simple for user authentication
- **Development Setup**: Hot module replacement and development middleware integration with Vite

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle with Neon serverless connection
- **Schema Design**: Relational model with tables for users, products, cart_items, and favorites with proper foreign key relationships
- **Local Storage**: Browser localStorage for cart and favorites persistence across sessions
- **Development Storage**: In-memory storage interface implementing the same contract as production storage for rapid prototyping

### Authentication and Authorization
- **Session-Based Auth**: Traditional server-side sessions stored in PostgreSQL using connect-pg-simple
- **User Management**: Complete user registration and login system with form validation using React Hook Form
- **Security**: Password hashing and secure session configuration with proper CSRF protection
- **State Management**: Context providers for authentication state management across the application

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TypeScript for the frontend foundation
- **Express.js**: Node.js web framework for the backend API server with middleware support
- **Drizzle ORM**: Modern TypeScript ORM with PostgreSQL dialect for database operations

### UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives including dialogs, dropdowns, and form components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for the futuristic dark theme
- **Framer Motion**: Production-ready motion library for React animations and transitions
- **Class Variance Authority**: Utility for creating variant-based component APIs with TypeScript support

### Database and Storage
- **Neon Database**: Serverless PostgreSQL platform (@neondatabase/serverless) for production database hosting
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Drizzle Kit**: CLI companion for Drizzle ORM for migrations and schema management

### Development and Build Tools
- **Vite**: Next-generation frontend tooling with React plugin and TypeScript support
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **PostCSS**: CSS post-processing with Autoprefixer for vendor prefixes
- **TSX**: TypeScript execution environment for development server

### Form and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **Hookform Resolvers**: Validation resolver for React Hook Form
- **Zod**: TypeScript-first schema validation library
- **Drizzle Zod**: Integration between Drizzle ORM and Zod for schema validation

### Additional Libraries
- **TanStack Query**: Powerful data synchronization for React with caching and background updates
- **Date-fns**: Modern JavaScript date utility library
- **Embla Carousel**: Library-agnostic carousel with React bindings
- **Lucide React**: Beautiful and consistent icon library
- **Wouter**: Minimalist routing library for React applications