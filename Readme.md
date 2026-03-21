# 🍵 Chai Aur Backend

A production-grade backend built while following the [Chai Aur Code](https://www.youtube.com/@chaiaurcode) backend series. This project covers real-world backend development with Node.js, Express, MongoDB, and more.

📐 [Data Model](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

---

## 🚀 Features

- User registration and authentication (JWT-based)
- Access token & refresh token flow
- File uploads (avatar + cover image) via Multer
- Cloud storage with Cloudinary
- Secure HTTP-only cookie handling
- Password hashing with bcrypt
- MongoDB aggregation pipelines
- RESTful API design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Web framework |
| MongoDB + Mongoose | Database & ODM |
| JWT | Authentication |
| Multer | File upload handling |
| Cloudinary | Cloud media storage |
| bcrypt | Password hashing |
| dotenv | Environment config |
| CORS | Cross-origin requests |
| Cookie-parser | Cookie handling |

---

## 📁 Project Structure

```
src/
├── controllers/           # Route handlers
│   ├── comment.controller.js
│   ├── dashboard.controller.js
│   ├── healthcheck.controller.js
│   ├── like.controller.js
│   ├── playlist.controller.js
│   ├── subscription.controller.js
│   ├── tweet.controller.js
│   ├── user.controller.js
│   └── video.controller.js
├── db/                    # Database connection
│   └── index.js
├── middlewares/           # Custom middleware
│   ├── auth.middleware.js
│   └── multer.middleware.js
├── models/                # Mongoose schemas
│   ├── comment.model.js
│   ├── like.model.js
│   ├── playlist.model.js
│   ├── subscription.model.js
│   ├── tweet.model.js
│   ├── user.model.js
│   └── video.model.js
├── routes/                # Express routers
│   ├── comment.routes.js
│   ├── dashboard.routes.js
│   ├── healthcheck.routes.js
│   ├── like.routes.js
│   ├── playlist.routes.js
│   ├── subscription.routes.js
│   ├── tweet.routes.js
│   ├── user.routes.js
│   └── video.routes.js
├── utils/                 # Utility classes
│   ├── ApiError.js
│   ├── ApiResponse.js
│   ├── asyncHandler.js
│   └── cloudinary.js
├── app.js
├── constants.js
└── index.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/chai-backend.git
cd chai-backend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
CORS_ORIGIN=*
MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Run the Server

```bash
npm run dev
```

Server will start on `http://localhost:8000`

---

## 📡 API Endpoints

### Auth Routes — `/api/v1/users`

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| POST | `/register` | ❌ | Register a new user |
| POST | `/login` | ❌ | Login and get tokens |
| POST | `/logout` | ✅ | Logout current user |
| POST | `/refresh-token` | ❌ | Refresh access token |

### Register — `POST /api/v1/users/register`

**Body (form-data):**
```
fullName    - string
email       - string
username    - string
password    - string
avatar      - file (required)
coverImage  - file (optional)
```

### Login — `POST /api/v1/users/login`

**Body (JSON):**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

---

## 📄 License

This project is for learning purposes, built alongside the Chai Aur Code YouTube series.