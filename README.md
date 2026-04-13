# 🤖 AI Interview Agent (MERN Stack)

A **production-ready AI Interview Platform** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to upload resumes, generate AI-based interview questions, and simulate real interview scenarios with a credit-based system.

---

## 🚀 Features

### 🔐 Authentication

* Firebase Google Authentication
* Secure login/signup flow
* Protected routes using custom middleware

### 📄 Resume Analysis

* Upload resumes using Multer
* Backend processing of resume data
* AI-generated interview questions based on resume content

### 🧠 AI Integration

* Integrated with OpenRouter API
* Generates intelligent and contextual interview questions
* Simulates real interview scenarios

### 💳 Credit System & Payments

* Credit-based access model
* Razorpay payment integration
* Users purchase credits to unlock features

### 🖥️ Frontend

* Built with React + Vite
* Styled using Tailwind CSS
* Smooth animations using Framer Motion

### ⚙️ Backend

* Node.js + Express.js REST API
* MongoDB database integration
* Secure middleware & authentication handling

### 📦 State Management

* Redux for global state management

### 🌍 Deployment

* Backend & frontend deployed using Render
* Version controlled with GitHub

---

## 🛠️ Tech Stack

**Frontend:**

* React.js (Vite)
* Tailwind CSS
* Framer Motion
* Redux

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)

**Other Tools:**

* Firebase Authentication
* OpenRouter API (AI)
* Razorpay (Payments)
* Multer (File Uploads)

---

## ⚡ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-interview-project.git
cd ai-interview-project
```

### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Setup environment variables

Create `.env` files in both frontend & backend.

#### Backend `.env`

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
OPENROUTER_API_KEY=your_api_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
```

#### Frontend `.env`

```
VITE_FIREBASE_API_KEY=your_key
VITE_BACKEND_URL=http://localhost:5000
```

---

### 4. Run the project

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

---

## 💡 How It Works

1. User logs in via Google Authentication
2. Uploads resume
3. AI analyzes resume and generates interview questions
4. User consumes credits to access interview sessions
5. Credits can be purchased via Razorpay

---

## 📸 Future Improvements

* Real-time voice interview simulation
* AI feedback on answers
* Video interview support
* Admin dashboard

---

## 🤝 Contributing

Feel free to fork this repo and contribute!

---

## 📜 License

This project is for educational purposes.

---

## ⭐ Acknowledgements

* OpenRouter AI
* Firebase Auth
* Razorpay
* MERN Stack Community

---
