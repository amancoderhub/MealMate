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

## 📄 Documentation & Walkthroughs

For a detailed breakdown of the recent premium upgrades and architectural decisions, please refer to:
- [Walkthrough: Multi-Payment & UI Upgrades](walkthrough.md)
- [Implementation Plan](implementation_plan.md)

---

## 👨‍💻 Contributing
Feel free to fork this repository and contribute to making MealMate the #1 food delivery solution in the world! 🍹🥂✨

---
<p align="center">Made with ❤️ for a better dining experience.</p>
