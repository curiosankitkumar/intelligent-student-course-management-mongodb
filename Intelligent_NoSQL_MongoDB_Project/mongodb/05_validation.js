// 05_validation.js
use ankit_intelligent_nosql

// Re-create a validated collection for a controlled schema example.
db.students_validated.drop()

db.createCollection("students_validated", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["rollNo", "name", "age", "email", "cgpa", "skills", "address"],
      properties: {
        rollNo: { bsonType: "int" },
        name: { bsonType: "string" },
        age: { bsonType: "int", minimum: 16, maximum: 100 },
        email: { bsonType: "string" },
        cgpa: { bsonType: ["double", "int", "long", "decimal"], minimum: 0, maximum: 10 },
        skills: {
          bsonType: "array",
          minItems: 1,
          items: { bsonType: "string" }
        },
        address: {
          bsonType: "object",
          required: ["city", "pinCode"],
          properties: {
            city: { bsonType: "string" },
            pinCode: { bsonType: "int" }
          }
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})

db.students_validated.insertOne({
  rollNo: 999,
  name: "Validation Demo",
  age: 21,
  email: "validation@example.com",
  cgpa: 8.2,
  skills: ["MongoDB"],
  address: { city: "Lucknow", pinCode: 226001 }
})

print("Valid document inserted. Try an invalid document to observe validation.")
// Example invalid insert:
// db.students_validated.insertOne({ rollNo: "ABC", name: "Invalid" })
