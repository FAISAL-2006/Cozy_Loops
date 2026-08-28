# 🧶 Cozy Loops — Crochet E-Commerce Platform

**Cozy Loops** is a full-stack e-commerce platform developed as a freelance project for a handmade crochet business. The website provides customers with a seamless experience for discovering crochet products, managing their cart, placing orders, making online payments, and reviewing purchased products.

The platform also includes a dedicated **admin system with Role-Based Access Control (RBAC)**, allowing authorized administrators to manage products, orders, and other business operations securely.

## Features

### Authentication & Authorization

* User registration and login
* Secure password hashing using **bcrypt**
* JWT-based authentication
* Token verification middleware
* Role-Based Access Control (RBAC)
* Separate **Customer** and **Admin** roles
* Protected admin routes and APIs
* Unauthorized users receive appropriate access restrictions

### 🛍️ Product Management

* Browse available crochet products
* Product details and information
* Admin product creation
* Update existing products
* Delete products
* Product inventory/data management
* Protected product-management APIs

### 🛒 Shopping Cart

* Add products to cart
* Update item quantities
* Remove products
* Dynamic cart calculations
* Persistent cart state
* Checkout integration

### 💳 Razorpay Payment Integration

* Razorpay payment gateway integration
* Secure server-side order creation
* Razorpay payment processing
* Payment ID and order ID handling
* Server-side payment signature verification
* Order creation after successful payment verification

### 📦 Order Management

* Customer order placement
* Order history
* Individual order details
* Order status management
* Admin-side order management
* Protected admin order APIs
* Customer access restricted to their own orders

### ⭐ Product Reviews

* Customers can submit product reviews
* Review data associated with users and products
* Review management through the backend

### 🛡️ Admin Dashboard

* Dedicated admin interface
* Admin-only navigation and protected routes
* Product management
* Order management
* Role-based access throughout the application
* Backend authorization to prevent unauthorized API access

## 🏗️ Architecture

The application follows a **client-server architecture** with a RESTful backend.

```text
React + TypeScript Frontend
            │
            │ HTTP / REST APIs
            ▼
Node.js + Express + TypeScript Backend
            │
       ┌────┴────┐
       ▼         ▼
   MongoDB     Razorpay
   Database    Payments
```

The backend is responsible for authentication, authorization, business logic, database operations, payment processing, and order management.

## 🧰 Tech Stack

### Frontend

* React
* TypeScript
* HTML5
* CSS
* Responsive UI

### Backend

* Node.js
* Express.js
* TypeScript
* REST APIs
* JWT Authentication
* bcrypt

### Database

* MongoDB
* Mongoose

### Payment

* Razorpay

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

## 🔐 Security

The application implements multiple layers of security:

* Password hashing with bcrypt
* JWT-based authentication
* Authentication middleware
* Role-based authorization
* Protected admin APIs
* Server-side Razorpay signature verification
* Environment variables for sensitive credentials
* Backend validation of user permissions before performing protected operations

## 🚀 Project Highlights

* Full-stack application developed for a **real-world freelance business**
* RESTful API architecture
* Secure authentication and authorization
* Complete customer and admin workflows
* RBAC implemented across frontend and backend
* Integrated real-world payment processing using Razorpay
* MongoDB-based product, user, order, and review management
* Production deployment with separate frontend and backend services
