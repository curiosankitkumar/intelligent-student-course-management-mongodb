// 06_indexes.js
use ankit_intelligent_nosql

// SINGLE index
db.students.createIndex({ rollNo: 1 }, { unique: true })

// COMPOUND index
db.students.createIndex({ "address.state": 1, cgpa: -1 })

// TEXT index
db.students.createIndex({ name: "text", skills: "text" })

print("Indexes on students:")
db.students.getIndexes().forEach(printjson)

// Example text query
db.students.find(
  { $text: { $search: "MongoDB" } },
  { _id: 0, name: 1, skills: 1 }
).forEach(printjson)
