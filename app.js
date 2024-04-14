const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const Task = require('./model/task'); // Change this line

const cors = require('cors');

const app = express();
// Configure middleware
app.use(cors());
app.use(express.json());
app.use('/api/task', Task);

const port = process.env.NODE_PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
