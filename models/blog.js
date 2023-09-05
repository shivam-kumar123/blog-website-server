const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    userName: String,
    pswd: String,
    email: String,
    blogs: [{
        title: String,
        content: String,
        author: String
    }]
});

module.exports = mongoose.model('Blog', blogSchema);