const Student = require("../../../models/Student");

module.exports = app => {
  app.get("/api/students", (req, res, next) => {
    Student.find(null, (err, students) => {
      res.send({ students });
    });
  });
};
