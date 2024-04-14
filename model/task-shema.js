
const mongoose = require('mongoose');

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