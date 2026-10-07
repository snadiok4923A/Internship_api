# Internship API Examples

## 1. Health check

### Request
- Method: GET
- URL: http://localhost:3000/api/health

### Response
```json
{
  "success": true,
  "message": "Internship API is running",
  "timestamp": "2026-10-07T12:00:00.000Z"
}
```

## 2. Get all internships

### Request
- Method: GET
- URL: http://localhost:3000/api/internships

### Example response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Frontend Developer Intern",
      "company": "NovaTech Labs"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 15,
    "totalPages": 2
  }
}
```

## 3. Pagination

### Request
- Method: GET
- URL: http://localhost:3000/api/internships?page=2&limit=5

### Example response
```json
{
  "success": true,
  "data": [
    {
      "id": 6,
      "title": "Cybersecurity Intern",
      "company": "ShieldGrid Security"
    }
  ],
  "pagination": {
    "page": 2,
    "limit": 5,
    "total": 15,
    "totalPages": 3
  }
}
```

## 4. Get one internship

### Request
- Method: GET
- URL: http://localhost:3000/api/internships/1

### Example response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Frontend Developer Intern",
    "company": "NovaTech Labs",
    "domain": "Web Development",
    "location": "Remote",
    "work_type": "Remote",
    "duration": "3 Months",
    "stipend": 12000,
    "skills": ["HTML", "CSS", "JavaScript"],
    "description": "Work with the frontend team to build responsive web interfaces and improve user experience across products.",
    "eligibility": "B.Tech, BCA or MCA students",
    "deadline": "2026-11-30",
    "created_at": "2026-10-07T12:00:00.000Z",
    "updated_at": "2026-10-07T12:00:00.000Z"
  }
}
```

## 5. Create internship

### Request
- Method: POST
- URL: http://localhost:3000/api/internships
- Body:
```json
{
  "title": "Backend Developer Intern",
  "company": "CodeNova Labs",
  "domain": "Software Development",
  "location": "Kolkata",
  "work_type": "Hybrid",
  "duration": "4 Months",
  "stipend": 15000,
  "skills": ["Node.js", "Express", "SQL"],
  "description": "Work on backend APIs and database systems for internal business features.",
  "eligibility": "B.Tech students",
  "deadline": "2026-12-15"
}
```

### Example response
```json
{
  "success": true,
  "data": {
    "id": 16,
    "title": "Backend Developer Intern",
    "company": "CodeNova Labs",
    "domain": "Software Development",
    "location": "Kolkata",
    "work_type": "Hybrid",
    "duration": "4 Months",
    "stipend": 15000,
    "skills": ["Node.js", "Express", "SQL"],
    "description": "Work on backend APIs and database systems for internal business features.",
    "eligibility": "B.Tech students",
    "deadline": "2026-12-15",
    "created_at": "2026-10-07T12:00:00.000Z",
    "updated_at": "2026-10-07T12:00:00.000Z"
  }
}
```

## 6. Update internship

### Request
- Method: PUT
- URL: http://localhost:3000/api/internships/1
- Body:
```json
{
  "title": "Frontend Developer Intern",
  "company": "NovaTech Labs",
  "domain": "Web Development",
  "location": "Remote",
  "work_type": "Remote",
  "duration": "4 Months",
  "stipend": 15000,
  "skills": ["HTML", "CSS", "JavaScript", "React"],
  "description": "Work with the frontend team to build responsive web interfaces and improve user experience across products.",
  "eligibility": "B.Tech, BCA or MCA students",
  "deadline": "2026-12-15"
}
```

### Example response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Frontend Developer Intern",
    "company": "NovaTech Labs",
    "duration": "4 Months",
    "stipend": 15000,
    "skills": ["HTML", "CSS", "JavaScript", "React"]
  }
}
```

## 7. Delete internship

### Request
- Method: DELETE
- URL: http://localhost:3000/api/internships/1

### Example response
```json
{
  "success": true,
  "message": "Internship deleted successfully"
}
```

## 8. Validation error

### Request
- Method: POST
- URL: http://localhost:3000/api/internships
- Body:
```json
{
  "title": "AB",
  "company": "A",
  "domain": "Web Development",
  "location": "Remote",
  "work_type": "Remote",
  "duration": "3 Months",
  "stipend": -5,
  "skills": [],
  "description": "Short",
  "eligibility": "B.Tech"
}
```

### Example response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": [
      {
        "field": "title",
        "message": "Title must be between 3 and 100 characters"
      },
      {
        "field": "stipend",
        "message": "Stipend must be a number greater than or equal to 0"
      }
    ]
  }
}
```

## 9. Not found error

### Request
- Method: GET
- URL: http://localhost:3000/api/internships/99999

### Example response
```json
{
  "success": false,
  "error": {
    "code": "INTERNSHIP_NOT_FOUND",
    "message": "Internship not found"
  }
}
```
