const Grades = require("../../../models/Grades");

module.exports = app => {
  app.get("/api/grades/:studentId", (req, res, next) => {
    let { body } = req;
    Grades.find({ studentId: req.params.studentId }, (err, grades) => {
      if (err) {
        res.send({
          success: false,
          message: "Error: Server error!",
          error: err
        });
      }
      if (grades.length == 0) {
        res.send({
          success: false,
          message: "grades cannot be found by this Student id!"
        });
      } else {
        res.send({
          success: true,
          message: "Grades found successfully",
          grades: grades[0]
        });
      }
    });
  });
  app.post("/api/grades/:studentId", (req, res, next) => {
    let { body } = req;

    Grades.find({ studentId: req.params.studentId }, (err, foundGrades) => {
      if (err) {
        res.send({
          success: false,
          message: "Error: Server error!",
          error: err
        });
      }

      if (foundGrades.length == 0) {
        let newGrades = new Grades();

        newGrades.studentId = req.params.studentId;
        newGrades.grades = body;

        newGrades.save((err, response) => {
          if (err) {
            res.send({
              success: false,
              message: "Error: Server error!",
              error: err
            });
          } else {
            res.send({
              success: true,
              message: "Grades posted"
            });
          }
        });
      } else {
        foundGrades[0].grades = body;

        foundGrades[0].save((err, response) => {
          if (err) {
            res.send({
              success: false,
              message: "Error: Server error!",
              error: err
            });
          } else {
            res.send({
              success: true,
              message: "Grades updated"
            });
          }
        });
      }
    });
  });
};
