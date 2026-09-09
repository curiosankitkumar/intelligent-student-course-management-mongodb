// 02_bson_and_data.js
// Demonstrates common BSON value types and inserts sample data.

use ankit_intelligent_nosql

db.students.insertMany([
  {
    rollNo: 101,
    name: "Rohit Sharma",
    age: 22,
    active: true,
    cgpa: 8.4,
    skills: ["Java", "MongoDB", "SQL"],
    address: {
      city: "Delhi",
      state: "Delhi",
      pinCode: 110001
    },
    profile: {
      year: 4,
      joinedAt: ISODate("2025-07-01T00:00:00Z")
    }
  },
  {
    rollNo: 102,
    name: "Priya Singh",
    age: 21,
    active: true,
    cgpa: 9.1,
    skills: ["Python", "MongoDB", "AI"],
    address: {
      city: "Jaipur",
      state: "Rajasthan",
      pinCode: 302001
    },
    profile: {
      year: 4,
      joinedAt: ISODate("2025-07-01T00:00:00Z")
    }
  },
  {
    rollNo: 103,
    name: "Aman Gupta",
    age: 23,
    active: true,
    cgpa: 7.8,
    skills: ["C++", "MongoDB", "DSA"],
    address: {
      city: "Kanpur",
      state: "Uttar Pradesh",
      pinCode: 208001
    },
    profile: {
      year: 4,
      joinedAt: ISODate("2024-07-01T00:00:00Z")
    }
  },
  {
    rollNo: 104,
    name: "Neha Yadav",
    age: 20,
    active: true,
    cgpa: 8.7,
    skills: ["Java", "Spring", "MongoDB"],
    address: {
      city: "Patna",
      state: "Bihar",
      pinCode: 800001
    },
    profile: {
      year: 3,
      joinedAt: ISODate("2025-07-01T00:00:00Z")
    }
  },
  {
    rollNo: 105,
    name: "Ankit Kumar",
    age: 21,
    active: true,
    cgpa: 8.9,
    skills: ["Java", "MongoDB", "Python"],
    address: {
      city: "Lucknow",
      state: "Uttar Pradesh",
      pinCode: 226001
    },
    profile: {
      year: 4,
      joinedAt: ISODate("2025-07-01T00:00:00Z")
    }
  }
])

db.courses.insertMany([
  { courseCode: "MDB101", name: "MongoDB Fundamentals", category: "NoSQL", credits: 3 },
  { courseCode: "AI201", name: "AI Applications", category: "AI", credits: 4 },
  { courseCode: "JAVA301", name: "Advanced Java", category: "Programming", credits: 4 },
  { courseCode: "PY102", name: "Python Programming", category: "Programming", credits: 4 }
])

db.enrollments.insertMany([
  { rollNo: 101, courseCode: "MDB101", semester: 7, marks: 82 },
  { rollNo: 101, courseCode: "JAVA301", semester: 7, marks: 78 },
  { rollNo: 102, courseCode: "MDB101", semester: 7, marks: 91 },
  { rollNo: 102, courseCode: "AI201", semester: 7, marks: 94 },
  { rollNo: 103, courseCode: "MDB101", semester: 7, marks: 73 },
  { rollNo: 103, courseCode: "JAVA301", semester: 7, marks: 76 },
  { rollNo: 104, courseCode: "MDB101", semester: 7, marks: 86 },
  { rollNo: 104, courseCode: "PY102", semester: 7, marks: 88 },
  { rollNo: 105, courseCode: "MDB101", semester: 7, marks: 90 },
  { rollNo: 105, courseCode: "AI201", semester: 7, marks: 89 },
  { rollNo: 105, courseCode: "PY102", semester: 7, marks: 92 }
])

print("Sample data inserted.")
