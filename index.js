const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();

dotenv.config()
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PSWD}@blog-cluster-db.uqnr4wn.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const blogSchema = require('./models/blog.js');

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('server is running or port 3001');
});

app.post('/', (req, res) => {
    const formData = req.body;
    // new user save his data in db
    if(formData.userName !== ''){

    }
    // console.log(`name: ${formData.name}`);
    // console.log(`email: ${formData.email}`);
    // console.log(`password: ${formData.pswd}`);
});

app.post('/new-user', (req, res) => {
    console.log('new user created');
    res.status(200).send('<h1>new user created</h1>');
});

app.post('/existing-user', (req, res) => {
    console.log('existing user');
    res.status(200).send('<h1>existing user</h1>');
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});