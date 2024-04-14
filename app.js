const http = require('http'); 
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


const { Task } = require('./model/task-shema');



const cors = require('cors');




    const app = express();
    // Congig middleware
app.use(cors());
app.use(express.json());
app.use('/api/task',Task);




const port = process.env.NODE_PORT || 5000;
const server = http.createServer(app);
server.listen(port, () => {
   console.log(`Server is listening on port ${port}`);
 });