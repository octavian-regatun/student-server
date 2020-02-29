const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://admin:admin@student-app-rac6u.mongodb.net/main?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });

const db = mongoose.connection;

module.exports = db;
