const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database');
        console.error(error);
        process.exit(1);
    });

const taskSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    isbn: String,
    pages: Number,
    language: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
