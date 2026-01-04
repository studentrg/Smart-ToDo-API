# Smart ToDo API 📝

Project Overview

The Smart ToDo API is a RESTful backend service for managing personal tasks.
It provides secure user authentication, persistent storage of tasks, and full CRUD functionality using a modern backend framework.

## 🚀 Features

- User Registration & Login
- Secure Authentication using JWT / Sessions
- Create, Read, Update, Delete (CRUD) Tasks
- User-specific task management
- RESTful API design
---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (NoSQL)
- **Authentication:** JSON Web Token (JWT)
- **Testing Tool:** Postman
- **Environment Management:** dotenv

---

## 📂 Project Structure

smart-todo-api/
├── controllers/
│ ├── authController.js
│ └── taskController.js
├── models/
│ ├── User.js
│ └── Task.js
├── routes/
│ ├── authRoutes.js
│ └── taskRoutes.js
├── middleware/
│ └── authMiddleware.js
├── config/
│ └── db.js
├── server.js
├── package.json
├── .gitignore
├── README.md
└── Smart-ToDo-API.postman_collection.json


---

## 🔐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|------|--------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login user & get JWT |

---

### Tasks (Protected Routes)

| Method | Endpoint | Description |
|------|--------|-------------|
| POST | /api/tasks | Create a new task |
| GET | /api/tasks | Get all tasks |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
bash
git clone https://github.com/ANKIT143-CODER/smart-todo-api.git
cd smart-todo-api

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Setup Environment Variables

Create a .env file in the root directory:

MONGO_URI=mongodb://127.0.0.1:27017/smarttodo
JWT_SECRET=your_secret_key
PORT=5000

### 4️⃣ Run the Server
npx nodemon server.js


Server will run at:

http://localhost:5000

🧪 Testing with Postman

Import the provided Postman collection

Register a user

Login to receive JWT token

Use the token as Bearer Token for task APIs

📌 Sample Authorization Header
Authorization: Bearer <JWT_TOKEN>

🧠 Future Enhancements

Task priorities & due dates

Role-based access control

Pagination & filtering

Deployment using Docker

👤 Author

Rinki Ghosh
B.Tech CSE Student
India 🇮🇳

