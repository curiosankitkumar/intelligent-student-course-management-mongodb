const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ankit_intelligent_nosql";

const studentSchema = new mongoose.Schema({
  rollNo: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 16 },
  email: { type: String, required: true },
  cgpa: { type: Number, min: 0, max: 10 },
  skills: [String],
  address: {
    city: String,
    state: String,
    pinCode: Number
  }
});

const Student = mongoose.model("Student", studentSchema, "students");

app.get("/", (req, res) => {
  res.json({ project: "Student Management System", student: "Ankit Kumar", regNo: "12311169" });
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find({}, { _id: 0 }).lean();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully.");
    app.listen(3000, () => console.log("Server running on http://localhost:3000"));
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

start();
