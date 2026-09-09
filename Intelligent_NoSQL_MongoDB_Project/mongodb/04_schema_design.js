// 04_schema_design.js
use ankit_intelligent_nosql

// ONE-TO-ONE: address/profile are embedded in one student document.
// ONE-TO-MANY: one student can have many enrollment documents.
// MANY-TO-MANY: students and courses are connected through enrollments.

// Students with embedded address:
db.students.find(
  { "address.state": "Uttar Pradesh" },
  { _id: 0, name: 1, address: 1 }
).forEach(printjson)

// Referencing: enrollment stores rollNo and courseCode instead of copying full objects.

// Example join-like lookup from enrollments to courses:
db.enrollments.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseCode",
      foreignField: "courseCode",
      as: "course"
    }
  },
  { $unwind: "$course" },
  {
    $project: {
      _id: 0,
      rollNo: 1,
      marks: 1,
      "course.name": 1,
      "course.category": 1
    }
  }
]).forEach(printjson)
