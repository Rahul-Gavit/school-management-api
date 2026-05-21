# School Management API

A Node.js + Express.js + MySQL based REST API system to manage schools.

This project allows users to:

- Add new schools
- Fetch schools sorted by proximity based on user location

The project is deployed on Railway.

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- Railway
- Postman

---

# Live API Base URL

```bash
https://school-management-api-production-7fb6.up.railway.app
```

---

# Project Structure

```bash
school-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── schoolController.js
│
├── middleware/
│   └── validation.js
│
├── routes/
│   └── schoolRoutes.js
│
├── utils/
│   └── distanceCalculator.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

# Features

✅ Add School API  
✅ List Schools API  
✅ MySQL Database Integration  
✅ Distance Calculation using Haversine Formula  
✅ Input Validation  
✅ Railway Deployment  
✅ RESTful API Structure

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <your-github-repo-url>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create `.env` File

```env
PORT=5000

MYSQLHOST=localhost
MYSQLPORT=3306
MYSQLUSER=root
MYSQLPASSWORD=your_password
MYSQLDATABASE=school_management
```

---

## 4. Create MySQL Database

```sql
CREATE DATABASE school_management;
```

---

## 5. Create Schools Table

```sql
USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

## 6. Run Project

```bash
npm run dev
```

Server will start at:

```bash
http://localhost:5000
```

---

# API Endpoints

---

# 1. Add School API

## Endpoint

```http
POST /api/addSchool
```

## Full URL

```bash
https://school-management-api-production-7fb6.up.railway.app/api/addSchool
```

## Request Body

```json
{
  "name": "ABC School",
  "address": "Mumbai",
  "latitude": 19.076,
  "longitude": 72.8777
}
```

## Success Response

```json
{
  "success": true,
  "message": "School added successfully"
}
```

---

# 2. List Schools API

## Endpoint

```http
GET /api/listSchools
```

## Full URL

```bash
https://school-management-api-production-7fb6.up.railway.app/api/listSchools?latitude=19.0760&longitude=72.8777
```

## Success Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "ABC School",
      "address": "Mumbai",
      "latitude": 19.076,
      "longitude": 72.8777,
      "distance": "0.00 km"
    }
  ]
}
```

---

# Distance Calculation

The API uses the **Haversine Formula** to calculate geographical distance between user coordinates and school coordinates.

---

# Deployment

This project is deployed using:

- Railway (Backend Hosting)
- Railway MySQL Database

---

# Postman Collection

You can test APIs using Postman.

Include:

- Add School API
- List Schools API

---

# Scripts

## Start Server

```bash
npm start
```

## Development Mode

```bash
npm run dev
```

---

# Environment Variables

| Variable      | Description    |
| ------------- | -------------- |
| PORT          | Server Port    |
| MYSQLHOST     | MySQL Host     |
| MYSQLPORT     | MySQL Port     |
| MYSQLUSER     | MySQL Username |
| MYSQLPASSWORD | MySQL Password |
| MYSQLDATABASE | Database Name  |

---

# Author

Rahul Gavit

---

# License

This project is created for assignment and learning purposes.
