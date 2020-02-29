const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  gender: {
    type: String,
    default: ""
  },
  birthday: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model("Student", StudentSchema, "students");
