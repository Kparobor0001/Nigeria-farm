# NaijaMart Backend Development Guide

## 🎯 What You've Built

Congratulations! You now have a complete, professional-grade e-commerce backend with:

### ✅ Core Features
- **User Authentication** - Register, login, logout with secure password hashing
- **Product Management** - Create, read, update, delete products
- **Shopping Cart** - Add, update, remove items from cart
- **Favorites System** - Save favorite products
- **Database Integration** - PostgreSQL with proper relationships
- **Session Management** - Secure user sessions
- **API Security** - Protected routes requiring authentication

### ✅ Technical Stack
- **Backend Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with local strategy
- **Security**: Password hashing with bcrypt
- **Validation**: Zod schemas for data validation
- **Session Storage**: PostgreSQL-based sessions

## 🚀 How to Test Your Backend

### 1. API Endpoints Available

#### Authentication Endpoints
```
POST /api/auth/register - Register new user
POST /api/auth/login - Login user
POST /api/auth/logout - Logout user
GET /api/auth/me - Get current user info
```

#### Product Endpoints
```
GET /api/products - Get all products (or by category)
GET /api/products/:id - Get specific product
POST /api/products - Create product (requires auth)
PUT /api/products/:id - Update product (requires auth)
DELETE /api/products/:id - Delete product (requires auth)
```

#### Cart Endpoints
```
GET /api/cart - Get user's cart items (requires auth)
POST /api/cart - Add item to cart (requires auth)
PUT /api/cart/:id - Update cart item quantity (requires auth)
DELETE /api/cart/:id - Remove item from cart (requires auth)
DELETE /api/cart - Clear entire cart (requires auth)
```

#### Favorites Endpoints
```
GET /api/favorites - Get user's favorites (requires auth)
POST /api/favorites - Add to favorites (requires auth)
DELETE /api/favorites/:productId - Remove from favorites (requires auth)
```

### 2. Testing with Browser/Postman

1. **Register a User**:
```json
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword",
  "firstName": "John",
  "lastName": "Doe"
}
```

2. **Login**:
```json
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securepassword"
}
```

3. **Get Products**:
```
GET http://localhost:5000/api/products
```

4. **Add to Cart**:
```json
POST http://localhost:5000/api/cart
Content-Type: application/json

{
  "productId": "your-product-id",
  "quantity": 2
}
```

## 🌐 How to Host Your Backend Online

### Option 1: Replit Deployment (Easiest)
1. Click the "Deploy" button in Replit
2. Your app will be available at `https://your-app-name.replit.app`
3. Set environment variables in Replit Secrets:
   - `DATABASE_URL` (your database connection string)
   - `SESSION_SECRET` (random string for session security)

### Option 2: Railway (Recommended for Production)
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Connect your GitHub account and select your repository
5. Railway will auto-detect it's a Node.js app
6. Add environment variables:
   - `DATABASE_URL`
   - `SESSION_SECRET`
   - `PORT` (Railway sets this automatically)

### Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Add environment variables in Vercel dashboard

### Option 4: Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables: `heroku config:set DATABASE_URL=your-db-url`
5. Deploy: `git push heroku main`

## 🗄️ Database Setup Guide

### Using Neon (Recommended - Free tier available)

1. **Go to [neon.tech](https://neon.tech)**
2. **Sign up** with GitHub/Google
3. **Create a new project**:
   - Project name: "naijamart-db"
   - Region: Choose closest to your users
   - Database name: "naijamart"
4. **Get connection string**:
   - Go to Dashboard → Connection Details
   - Copy the connection string (starts with `postgresql://`)
5. **Add to your environment**:
   - In Replit: Add to Secrets as `DATABASE_URL`
   - Locally: Add to `.env` file

### Alternative: PostgreSQL on Railway
1. Go to [railway.app](https://railway.app)
2. Create new project → Add PostgreSQL
3. Copy the connection string from Variables tab
4. Use this as your `DATABASE_URL`

### Alternative: Supabase
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database
4. Copy the connection string
5. Replace `[YOUR-PASSWORD]` with your database password

## 📁 How to Transfer to Visual Studio Code

### Step 1: Download Your Code
1. In Replit, click the three dots menu
2. Select "Download as zip"
3. Extract the zip file to your desired folder

### Step 2: Set Up Local Development
1. **Install Node.js** (if not installed):
   - Go to [nodejs.org](https://nodejs.org)
   - Download and install LTS version

2. **Open in VS Code**:
   - Open Visual Studio Code
   - File → Open Folder → Select your extracted folder

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   - Create `.env` file in root directory:
   ```
   DATABASE_URL=your-database-connection-string
   SESSION_SECRET=your-random-secret-key
   NODE_ENV=development
   PORT=5000
   ```

5. **Run development server**:
   ```bash
   npm run dev
   ```

### Step 3: Version Control with Git
1. **Initialize Git** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Connect to GitHub**:
   - Create repository on GitHub
   - Follow GitHub's instructions to push your code

## 🔧 Backend Architecture Explained

### File Structure
```
server/
├── db.ts           # Database connection setup
├── storage.ts      # Database operations (CRUD)
├── routes.ts       # API endpoints and authentication
├── index.ts        # Express server setup
└── seed.ts         # Sample data for testing

shared/
└── schema.ts       # Database schema and types
```

### Key Concepts

#### 1. Database Schema (shared/schema.ts)
- **Users table**: Stores user accounts with hashed passwords
- **Products table**: All product information
- **Cart Items table**: Links users to products with quantities
- **Favorites table**: Stores user's favorite products

#### 2. Storage Layer (server/storage.ts)
- **Interface-based design**: Easy to switch between different storage types
- **Type safety**: Full TypeScript support
- **Relationships**: Proper foreign key relationships between tables

#### 3. Authentication (server/routes.ts)
- **Session-based auth**: More secure than JWT for web apps
- **Password hashing**: Using bcrypt for security
- **Protected routes**: Some endpoints require authentication

#### 4. API Design
- **RESTful endpoints**: Standard HTTP methods (GET, POST, PUT, DELETE)
- **Error handling**: Proper error responses with status codes
- **Data validation**: Using Zod schemas to validate input

## 🛠️ Next Steps for Learning

### Beginner Level
1. **Test all API endpoints** using Postman or Thunder Client
2. **Add more products** through the API
3. **Understand the database relationships**
4. **Read through the code comments**

### Intermediate Level
1. **Add order management** (orders table and API)
2. **Implement product search** functionality
3. **Add product reviews** system
4. **Set up email notifications**

### Advanced Level
1. **Add payment integration** (Stripe/Paystack)
2. **Implement real-time notifications** with WebSockets
3. **Add admin dashboard** for managing products
4. **Set up automated testing**

## 📚 Learning Resources

### Backend Development
- [Express.js Official Docs](https://expressjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [RESTful API Design](https://restfulapi.net/)

### Database & ORM
- [Drizzle ORM Docs](https://orm.drizzle.team/)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [Database Design Basics](https://www.lucidchart.com/pages/database-diagram/database-design)

### Authentication & Security
- [Passport.js Docs](http://www.passportjs.org/)
- [Web Security Basics](https://developer.mozilla.org/en-US/docs/Web/Security)
- [OWASP Security Guide](https://owasp.org/www-project-top-ten/)

## 🆘 Troubleshooting

### Common Issues
1. **Database connection fails**: Check your DATABASE_URL is correct
2. **Authentication not working**: Clear browser cookies and try again
3. **CORS errors**: Add CORS middleware if accessing from different domain
4. **Environment variables not loading**: Make sure .env file is in root directory

### Getting Help
- Check the console logs for error messages
- Use Postman/Thunder Client to test API endpoints
- Review the database schema in your hosting provider's dashboard
- Ask specific questions about the code functionality

Good luck with your backend development journey! 🚀