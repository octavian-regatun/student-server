const { port } = require('./config/config');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/connect');
const app = express();

const server = http.Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server running!');
});

require('./routes/api/students/student')(app);
require('./routes/api/students/students')(app);
require('./routes/api/grades/grades')(app);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

server.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
