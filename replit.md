# Nigerian Fresh E-commerce Platform

## Overview

Nigerian Fresh is a full-stack e-commerce platform specializing in farm-to-table delivery of fresh, organic Nigerian produce. The application connects local farmers with consumers, offering a curated selection of traditional Nigerian foods including tubers, proteins, spices, and other agricultural products. The platform features flash sales, shopping cart functionality, user authentication, and a modern responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **UI Framework**: Shadcn/UI components built on Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with custom design tokens for consistent theming and responsive design
- **State Management**: React Context API for cart and favorites management, TanStack Query for server state
- **Animations**: Framer Motion for smooth interactions and micro-animations
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database ORM**: Drizzle ORM for type-safe database operations and schema management
- **Storage Pattern**: Interface-based storage layer with in-memory implementation for development
- **Session Management**: Express sessions with PostgreSQL store for user authentication
- **Development Setup**: Hot module replacement and development middleware integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle with Neon serverless connection
- **Schema Design**: Relational model with tables for users, products, cart items, and favorites
- **Local Storage**: Browser localStorage for cart and favorites persistence across sessions
- **Development Storage**: In-memory storage interface for rapid prototyping and testing

### Authentication and Authorization
- **Session-Based Auth**: Traditional server-side sessions stored in PostgreSQL
- **User Management**: Complete user registration and login system with form validation
- **Security**: Password hashing and secure session configuration
- **State Management**: Context providers for authentication state across the application

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TypeScript for the frontend foundation
- **Express.js**: Node.js web framework for the backend API server
- **Drizzle ORM**: Modern TypeScript ORM for database operations and migrations

### UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Shadcn/UI**: Pre-built component library built on Radix and Tailwind
- **Framer Motion**: Production-ready motion library for React animations

### Database and Storage
- **Neon Database**: Serverless PostgreSQL with connection pooling
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Drizzle Kit**: Migration tool and schema management for Drizzle ORM

### Development Tools
- **Vite**: Build tool with TypeScript support and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution environment for development

### Form and Data Management
- **React Hook Form**: Performant forms library with minimal re-renders
- **Hookform Resolvers**: Validation resolver for form schemas
- **TanStack Query**: Server state management and caching solution
- **Zod**: TypeScript-first schema validation library

### Additional Utilities
- **Date-fns**: Modern JavaScript date utility library
- **Lucide React**: Feather icons as React components
- **Class Variance Authority**: Utility for creating component variants
- **CLSX**: Utility for constructing className strings conditionally