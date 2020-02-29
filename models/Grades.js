const mongoose = require("mongoose");

const GradesSchema = new mongoose.Schema({
  studentId: {
    type: String,
    default: ""
  },
  grades: { type: Array, default: [] }
});

module.exports = mongoose.model("Grades", GradesSchema, "grades");
