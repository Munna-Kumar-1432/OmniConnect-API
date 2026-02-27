# OmniConnect-API 🚀

A powerful, multipurpose Node.js Management API built with a modular architecture. This system provides comprehensive management for Employees, Students, and YouTube-style media content, combined with a real-time Chat application.

## 🌟 Key Features

- **Employee Management**: Full CRUD operations with live socket notifications.
- **Student Enrollment**: Complete student record management and tracking.
- **YouTube Related API**: 
  - Media upload (Images & Videos) integrated with **Cloudinary**.
  - Advanced storage handling using Multer.
- **Real-Time Chat**: Persistent chat rooms with message history powered by **Socket.io**.
- **Live Updates**: Real-time broadcasts for all CRUD actions (Created, Updated, Deleted).
- **Interactive Documentation**: Fully documented using **Swagger UI**.

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (Mongoose ODM)
- **Real-Time**: Socket.io
- **File Storage**: Cloudinary
- **Documentation**: Swagger (OpenAPI 3.0)
- **Security**: Helmet, CORS

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v16+)
- MongoDB Atlas Account
- Cloudinary Account

### 2. Installation
```bash
git clone https://github.com/Munna-Kumar-1432/OmniConnect-API.git
cd OmniConnect-API
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your credentials:
```env
PORT=5000
MONGODB_URI="your_mongodb_atlas_uri"
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

### 4. Running the App
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📚 API Documentation
Once the server is running, visit:
[http://localhost:5000/api-docs](http://localhost:5000/api-docs)

## 💬 Chat Test
Open `chat_test.html` in your browser to test the real-time chat functionality.

---
Developed with ❤️ by **Munna Kumar**
