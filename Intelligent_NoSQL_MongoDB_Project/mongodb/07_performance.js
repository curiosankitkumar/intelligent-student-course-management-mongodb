// 07_performance.js
use ankit_intelligent_nosql

print("Query before/after indexing can be studied with executionStats.")

// Indexed lookup by roll number:
db.students.find({ rollNo: 105 }).explain("executionStats")

// Compound-index-supported query:
db.students.find({
  "address.state": "Uttar Pradesh",
  cgpa: { $gte: 8.5 }
}).explain("executionStats")

// Covered-query style example: projection keeps required fields small.
// Check totalKeysExamined, totalDocsExamined and executionTimeMillis in the output.
