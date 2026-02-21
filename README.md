# 🍔 MealMate - Premium Full-Stack Food Delivery Ecosystem 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

**MealMate** is a high-performance, full-stack MERN application designed for the modern food delivery business. It features a stunning user-facing frontend, a powerful admin dashboards for sales analytics, and a robust backend integrated with Stripe for secure payments.

---

## 💎 Premium Features

### 🛒 User Experience (Frontend)
- **Modern Category Navigation**: Horizontally scrollable card-based menu for intuitive dish selection.
- **Smart Image Rendering**: Hybrid logic that seamlessly integrates local assets with backend-uploaded images.
- **Responsive Checkout**: Advanced Multi-Payment system supporting **Cash on Delivery (COD)** and **Stripe (Online)**.
- **Social Proof & Engagement**:
  - **Animated Stats Bar**: Real-time metrics showing happy customers and professional chefs.
  - **Smart Newsletter**: Modern subscription section for customer retention and marketing.
- **Persistent UI**: Clean layout that maintains premium features across all pages (Cart, Home, Orders).

### 📊 Business Intelligence (Admin Panel)
- **Analytics Dashboard**: Instant views of Total Revenue, Total Orders, and Item Inventory.
- **Advanced Order Management**:
  - Filter orders by status (Processing, Delivering, Delivered).
  - Search by customer name or phone number.
  - Real-time status updates with visual progress indicator.
- **Inventory Control**: Seamlessly add, list, and search for food items.

### 🛡️ Core Infrastructure (Backend)
- **Role-Based Access Control (RBAC)**: Secure separation between "User" and "Admin" permissions.
- **Robust Authentication**: JWT-based secure login with bcrypt password hashing.
- **Payment Integration**: Secure Stripe Checkout API with automated webhook-style verification logic.
- **Scalable Database**: MongoDB architecture with optimized schemas for orders, users, and food items.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Context API, CSS3 (Premium Styles)
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Security**: JWT (JSON Web Tokens), Bcryptjs, Validator
- **External APIs**: Stripe (Payments), Cloudinary/Local Assets (Images)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js installed
- MongoDB Atlas account or local MongoDB
- Stripe API keys

### 2. Configuration (`.env`)
Create a `.env` file in the `backend/` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
```

### 3. Installation & Setup

**Backend:**
```bash
cd backend
npm install
npm run server (or nodemon server.js)
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Admin Panel:**
```bash
cd admin
npm install
npm run dev
```

---

---

## 💎 Premium Evolution Breakdown

### 💳 Multi-Payment Checkout System
You now offer your customers the choice and convenience they expect from a top-tier app!

- **Cash on Delivery (COD)**: Orders are placed instantly and categorized correctly in the backend. 💵
- **Online (Stripe)**: Secure, immediate payment through Credit/Debit cards. 💳
- **Premium UI**: An ultra-clean selection interface with animated radio circles and responsive design. ✨

### 📈 Premium Landing Page Upgrades
Your home page now builds instant trust and drives growth!

- **Animated Statistics Bar**: Showcasing "50k+ Happy Customers", "100+ Pro Chefs", and "500+ Tasty Varieties". 📊
- **Modern Newsletter**: A stylish subscription section near the footer to capture emails and offer deals. 💌
- **Global Persistence**: These features stay visible as you navigate, reinforcing your brand everywhere. 🧱🛡️

### 📸 Smart Image Rendering & Stability
- **Fixed Missing Images**: Successfully resolved the "Invisible Image" issue in the Cart and Menu. Both local assets and backend photos now render perfectly. 🥘✨
- **Zero-Bugs Promise**: Cleaned up all syntax errors and handled the React Context initialization for a buttery-smooth experience. 🧼🙌

### 🍱 Food Item UI (Attractive & Smooth)
- **Fluid Hover Effects**: Dish cards now lift gracefully using specialized `cubic-bezier` timing. 🚀
- **Modern Glassmorphism**: Quantity counters feature a sleek blur effect (`backdrop-filter`) for a premium look. 💎
- **Micro-Interactions**: The "Add" icon rotates and scales dynamically on hover, providing tactile feedback. ✨
- **Smooth Entry**: Items slide and fade into view during page load, creating a "live" feel. 🌊

### 🌙 Dark / Light Mode
- **Universal Toggle**: Stylish switcher in both Frontend and Admin Navbar.
- **Auto-Persistence**: Remembers your theme preference across the entire ecosystem.
- **Admin Dashboard Theming**: Optimized charts, tables, and status pills for night-time management. 🌒📊

---

## 🛠️ Implementation & Architecture

### 📊 Multi-Payment Integration (COD & Stripe)
- **Model Update**: Added `paymentMethod` to `orderModel.js` to distinguish transaction types.
- **Logic Branching**: Updated `orderController.js` to bypass Stripe sessions for COD, providing instant confirmation.
- **Interactive UI**: Added dynamic radio-button logic in `PlaceOrder.jsx` with real-time state management.

### 🍱 Category Menu UI Enhancement (Scrollable Cards)
- **Modern Layout**: Transformed the horizontal list into sleek, shadow-backed cards with rounded corners.
- **Hover Micro-Animations**: Interactive lifting effects in `ExploreMenu.css` for a premium, tactile feel.
- **Responsive Scrolling**: Smooth, hidden-scrollbar horizontal list for better mobile UX.

### 🛡️ Admin Security & Analytics
- **RBAC (Role Based Access Control)**: Backend logic ensures only `role: "admin"` users can enter the control panel.
- **Dashboard Widgets**: Visual stat cards for Revenue, Order Volume, and Inventory counts.
- **Advanced Lists**: Integrated search and category filtering in `List.jsx` and `Orders.jsx`.

---

---

## 👨‍💻 Contributing
Feel free to fork this repository and contribute to making MealMate the #1 food delivery solution in the world! 🍹🥂✨

---
<p align="center">Made with ❤️ for a better dining experience.</p>
