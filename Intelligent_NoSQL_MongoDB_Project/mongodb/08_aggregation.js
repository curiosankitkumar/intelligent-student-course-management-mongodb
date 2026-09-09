// 08_aggregation.js
use ankit_intelligent_nosql

// Average marks by course
db.enrollments.aggregate([
  {
    $group: {
      _id: "$courseCode",
      averageMarks: { $avg: "$marks" },
      students: { $sum: 1 }
    }
  },
  { $sort: { averageMarks: -1 } }
]).forEach(printjson)

// Student performance summary
db.enrollments.aggregate([
  {
    $group: {
      _id: "$rollNo",
      averageMarks: { $avg: "$marks" },
      courseCount: { $sum: 1 },
      highestMarks: { $max: "$marks" }
    }
  },
  { $sort: { averageMarks: -1 } }
]).forEach(printjson)

// Join students + enrollments and show names
db.students.aggregate([
  {
    $lookup: {
      from: "enrollments",
      localField: "rollNo",
      foreignField: "rollNo",
      as: "enrollments"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      rollNo: 1,
      courseCount: { $size: "$enrollments" }
    }
  },
  { $sort: { courseCount: -1 } }
]).forEach(printjson)
