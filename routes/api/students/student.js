const Student = require("../../../models/Student");

module.exports = app => {
  app.post("/api/student", (req, res, next) => {
    let { body } = req;
    let { firstName, lastName, gender, birthday } = body;

    if (!firstName) {
      return res.send({
        success: false,
        message: "Error: First Name cannot be blank!"
      });
    }
    if (!lastName) {
      return res.send({
        success: false,
        message: "Error: Last Name cannot be blank!"
      });
    }
    if (!gender) {
      return res.send({
        success: false,
        message: "Error: Gender cannot be blank!"
      });
    }
    if (!birthday) {
      return res.send({
        success: false,
        message: "Error: Birthday cannot be blank!"
      });
    }

    firstName = firstName.trim();
    lastName = lastName.trim();

    let student = new Student();

    student.firstName = firstName;
    student.lastName = lastName;
    student.gender = gender;
    student.birthday = new Date(birthday);

    student.save(err => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error!",
          error: err
        });
      }
      return res.send({
        success: true,
        message: "Student added!"
      });
    });
  });

  app.get("/api/student", (req, res, next) => {
    let { query } = req;
    let { firstName, lastName } = query;

    if (!firstName && !lastName) {
      res.send({
        success: false,
        message: "First Name and Last Name queries cannot be blank"
      });
    } else if (!firstName) {
      res.send({
        success: false,
        message: "First Name query cannot be blank"
      });
    } else if (!lastName) {
      res.send({
        success: false,
        message: "Last Name query cannot be blank"
      });
    }

    Student.find(
      { firstName: firstName, lastName: lastName },
      (err, student) => {
        if (err) {
          res.send({
            success: false,
            message: "Error: Server error!",
            error: err
          });
        }

        if (student.length == 0) {
          res.send({
            success: false,
            message: "Student cannot be found by those names"
          });
        } else {
          res.send({
            success: true,
            message: "Student found successfully",
            student: student[0]
          });
        }
      }
    );
  });
};
