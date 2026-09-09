# Intelligent Student & Course Management System using MongoDB

**Student:** Ankit Kumar  
**Registration No.:** 12311169  
**Course:** CSE494 – Intelligent NoSQL Databases

## Project Purpose

This mini-project demonstrates the major practical topics listed in the CSE494 syllabus: MongoDB databases and collections, BSON data, CRUD operations, embedding and referencing, one-to-many and many-to-many relationships, validation, indexes, aggregation, `explain()`, Node.js/Mongoose integration, Python/PyMongo integration, and an AI-oriented analytics example.

## Syllabus Mapping

| Syllabus Topic | Project Implementation |
|---|---|
| NoSQL vs SQL | `docs/nosql_vs_sql.md` |
| MongoDB Shell & Compass | `mongodb/01_setup.js` |
| BSON data types | `mongodb/02_bson_and_data.js` |
| CRUD | `mongodb/03_crud.js` |
| Embedding vs Referencing | `mongodb/04_schema_design.js` |
| One-to-one | Student profile embedded in student |
| One-to-many | Student -> enrollments |
| Many-to-many | Students <-> courses through enrollments |
| Validation | `mongodb/05_validation.js` |
| Single/Compound/Text indexes | `mongodb/06_indexes.js` |
| explain() | `mongodb/07_performance.js` |
| Aggregation | `mongodb/08_aggregation.js` |
| Node.js + Mongoose | `nodejs/` |
| Python + PyMongo | `python/` |
| AI-based analytics | `mongodb/09_intelligent_analytics.js` |

## Project Collections

- `students`
- `courses`
- `enrollments`

### Example Student document

```json
{
  "rollNo": 123,
  "name": "Ankit Kumar",
  "age": 21,
  "email": "ankit@example.com",
  "skills": ["Java", "MongoDB", "Python"],
  "address": {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "pinCode": 226001
  },
  "profile": {
    "phone": "9999999999",
    "year": 4
  }
}
```

## Requirements

- MongoDB Community Server or MongoDB Atlas
- MongoDB Shell (`mongosh`)
- MongoDB Compass (recommended for screenshots)
- Node.js 18+ for the Node.js example
- Python 3.10+ and `pymongo` for the Python example

## Run the MongoDB scripts

Open `mongosh` and run the scripts in this order:

```javascript
load("mongodb/01_setup.js")
load("mongodb/02_bson_and_data.js")
load("mongodb/03_crud.js")
load("mongodb/04_schema_design.js")
load("mongodb/05_validation.js")
load("mongodb/06_indexes.js")
load("mongodb/07_performance.js")
load("mongodb/08_aggregation.js")
load("mongodb/09_intelligent_analytics.js")
```

## Node.js

```bash
cd nodejs
npm install
node src/server.js
```

The example starts an HTTP server and demonstrates a MongoDB connection through Mongoose.

## Python

```bash
cd python
pip install -r requirements.txt
python app.py
```

## Screenshots for RPL / Practical File

Take your own screenshots after running the project:

1. MongoDB database and three collections in Compass
2. Five or more student documents
3. CRUD query and output
4. Embedded address/profile document
5. Course/enrollment relationship
6. Validation error for an invalid document
7. Index list
8. `explain("executionStats")` output
9. Aggregation output
10. Node.js successful connection/output
11. Python successful connection/output

## Important

The code is intended as a student portfolio project. Run it yourself and capture your own screenshots/output before submitting it as evidence.
