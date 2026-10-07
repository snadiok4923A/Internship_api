# Internship REST API

## About

This project is a beginner-friendly REST API for managing fictional internship records. It uses Node.js, Express, and SQLite to provide Create, Read, Update, and Delete (CRUD) operations with persistent storage.

## Features

- RESTful API endpoints
- CRUD operations for internships
- SQLite persistence
- Input validation
- Pagination
- Consistent error handling
- HTTP status codes
- Seed data
- Health check endpoint
- CORS enabled
- Sample API examples

## Technologies

- Node.js
- Express
- SQLite
- better-sqlite3
- express-validator
- dotenv
- CORS

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
├── database/
│   ├── schema.sql
│   ├── seed.js
│   └── internships.db   (generated on first run/seed)
├── data/
│   └── seed.json
├── examples/
│   ├── api-examples.md
│   └── Internship-API.postman_collection.json
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── node_modules/
```

## Requirements

- Node.js 18+
- npm

## Installation

```bash
git clone YOUR_REPOSITORY_URL
cd internship-api
npm install
```

## Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

The default configuration is:

```env
PORT=3000
NODE_ENV=development
```

## Database Setup

Run the seed command to create the SQLite database and insert sample internship records:

```bash
npm run seed
```

This command does the following:

- Creates the `database` folder if needed
- Creates the SQLite database file
- Creates the `internships` table if it does not already exist
- Loads fictional sample internship data from `data/seed.json`
- Skips insertion if the database already contains records

This project intentionally generates the SQLite file locally instead of committing it, which keeps the repository cleaner and avoids storing local data in version control.

## Run Development Server

```bash
npm run dev
```

## Run Production Server

```bash
npm start
```

## API Base URL

```text
http://localhost:3000/api
```

## Endpoints

### Health check

```http
GET /api/health
```

Returns API status and a timestamp.

### Get all internships

```http
GET /api/internships
```

Returns internships with pagination metadata.

### Get one internship

```http
GET /api/internships/:id
```

Returns a single internship record.

### Create internship

```http
POST /api/internships
```

Creates a new internship record.

### Update internship

```http
PUT /api/internships/:id
```

Updates an existing internship record.

### Delete internship

```http
DELETE /api/internships/:id
```

Deletes an internship record.

## Pagination

Use query parameters for page and limit:

```http
GET /api/internships?page=1&limit=10
```

Default values:

- page: 1
- limit: 10
- max limit: 50

Pagination response includes:

- page
- limit
- total
- totalPages

## Validation

The API validates required fields and data types before saving records. Fields include:

- title
- company
- domain
- location
- work_type
- duration
- stipend
- skills
- description
- eligibility
- deadline (optional)

It also checks:

- minimum and maximum length
- work type must be one of Remote, Hybrid, or On-site
- stipend must be greater than or equal to 0
- skills must be a non-empty array
- description must be at least 20 characters
- deadline must be a valid date if provided

## Error Handling

This API uses consistent error responses with proper HTTP statuses.

Common status codes:

- 200: successful GET, PUT, DELETE
- 201: successful POST
- 400: validation or bad request error
- 404: resource or route not found
- 500: unexpected database/server error

## API Examples

See:

- [examples/api-examples.md](./examples/api-examples.md)
- [examples/Internship-API.postman_collection.json](./examples/Internship-API.postman_collection.json)

## Database

The application uses SQLite for persistent storage. The database file is created automatically in the `database` folder and the table schema is loaded from `database/schema.sql`.

## Seed Data

The project includes fictional internship records in `data/seed.json`. These are inserted into SQLite by the `npm run seed` command.

## Testing

You can test the API using any of the following methods:

### Browser

Open the base URL:

```text
http://localhost:3000
```

### curl

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/internships
curl -X POST http://localhost:3000/api/internships \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Backend Developer Intern",
    "company": "CodeNova Labs",
    "domain": "Software Development",
    "location": "Kolkata",
    "work_type": "Hybrid",
    "duration": "4 Months",
    "stipend": 15000,
    "skills": ["Node.js", "Express", "SQL"],
    "description": "Work on backend APIs and database systems.",
    "eligibility": "B.Tech students",
    "deadline": "2026-12-15"
  }'
```

### Postman

Import the collection file:

```text
examples/Internship-API.postman_collection.json
```

This project does not currently include automated test files, so manual testing is the recommended validation method.
