// 03_crud.js
use ankit_intelligent_nosql

// CREATE
db.students.insertOne({
  rollNo: 106,
  name: "Temporary Student",
  age: 21,
  active: true,
  cgpa: 7.5,
  skills: ["MongoDB"],
  address: { city: "Noida", state: "Uttar Pradesh", pinCode: 201301 },
  profile: { year: 4, joinedAt: new Date() }
})

// READ
print("All students:")
db.students.find({}, { _id: 0 }).forEach(printjson)

print("Students with CGPA > 8.5:")
db.students.find({ cgpa: { $gt: 8.5 } }, { _id: 0, name: 1, cgpa: 1 }).forEach(printjson)

// UPDATE
db.students.updateOne(
  { rollNo: 106 },
  { $set: { cgpa: 8.1 }, $addToSet: { skills: "Python" } }
)

// DELETE
db.students.deleteOne({ rollNo: 106 })

print("CRUD demonstration completed.")
