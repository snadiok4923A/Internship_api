# Internship REST API

A beginner-friendly REST API for managing fictional internship records using **Node.js, Express, and SQLite**.

This project provides complete CRUD operations, input validation, pagination, persistent database storage, consistent error responses, seed data, and API examples.

---

## About

The Internship REST API is designed to provide a simple backend service for managing internship opportunities.

It supports:

- Creating internship records
- Reading internship records
- Updating internship records
- Deleting internship records
- Input validation
- Pagination
- SQLite persistence
- Consistent API responses
- Centralized error handling
- Seed data
- Health checking

The project is built as part of a REST API and Persistent Data development task.

---

## Features

- RESTful API endpoints
- Complete CRUD operations
- SQLite persistent storage
- `better-sqlite3` database driver
- Input validation using `express-validator`
- Pagination support
- Consistent JSON response format
- Centralized error handling
- Proper HTTP status codes
- Seed data
- Health check endpoint
- CORS enabled
- Environment configuration
- Postman collection
- API examples
- Beginner-friendly project structure

---

## Technologies

- **Node.js**
- **Express.js**
- **SQLite**
- **better-sqlite3**
- **express-validator**
- **dotenv**
- **CORS**
- **Postman**

---

## Project Structure

```text
internship-api/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── database.js
│   ├── routes/
│   │   └── internshipRoutes.js
│   ├── controllers/
│   │   └── internshipController.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   └── validators/
│       └── internshipValidator.js
│
├── database/
│   ├── schema.sql
│   └── seed.js
│   
│
├── data/
│   └── seed.json
│
├── examples/
│   ├── api-examples.md
│   └── Internship-API.postman_collection.json
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md