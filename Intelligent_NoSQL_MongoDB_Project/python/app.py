from pymongo import MongoClient

MONGO_URI = "mongodb://127.0.0.1:27017/"
client = MongoClient(MONGO_URI)

db = client["ankit_intelligent_nosql"]
students = db["students"]

print("Connected to MongoDB successfully.")

print("\nStudents with CGPA >= 8.5:")
for doc in students.find(
    {"cgpa": {"$gte": 8.5}},
    {"_id": 0, "name": 1, "rollNo": 1, "cgpa": 1}
):
    print(doc)

print("\nTotal students:", students.count_documents({}))
