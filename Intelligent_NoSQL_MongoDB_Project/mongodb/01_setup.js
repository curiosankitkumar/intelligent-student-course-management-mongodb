// 01_setup.js
// Create the project database and collections.

use ankit_intelligent_nosql

db.students.drop()
db.courses.drop()
db.enrollments.drop()

db.createCollection("students")
db.createCollection("courses")
db.createCollection("enrollments")

print("Database and collections created.")
