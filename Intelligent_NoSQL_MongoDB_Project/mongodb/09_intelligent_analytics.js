// 09_intelligent_analytics.js
// AI-oriented / intelligent analytics example using aggregation.
// It does not claim to train a machine-learning model; it prepares data
// that could be used by a predictive analytics workflow.

use ankit_intelligent_nosql

db.enrollments.aggregate([
  {
    $group: {
      _id: "$rollNo",
      averageMarks: { $avg: "$marks" },
      lowestMarks: { $min: "$marks" },
      coursesCompleted: { $sum: 1 }
    }
  },
  {
    $addFields: {
      riskLevel: {
        $switch: {
          branches: [
            { case: { $lt: ["$averageMarks", 60] }, then: "High" },
            { case: { $lt: ["$averageMarks", 75] }, then: "Medium" }
          ],
          default: "Low"
        }
      }
    }
  },
  { $sort: { averageMarks: 1 } }
]).forEach(printjson)

print("This output can be exported to a Python/AI pipeline for predictive analytics.")
