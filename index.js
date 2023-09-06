const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();

const blogsRoute = require('./routes/blog.js');

dotenv.config();
app.use(cors());
app.use(express.json());

const isAuthenticated = (req, res, next) => {
    const {name, email, pswd} = req.body;
    console.log('authenticating in the middleware');
    try{
        if(name === undefined && email !== '' && pswd !== ''){
            // authenticate from db
            next();
        } else if(name !== '' && email !== '' && pswd !== '') {
            // authenticate from db
            next();
        } else {
            res.status(404).send({error: 'recheck entered data'});
        }
    } catch (err) {
        res.status(500).send({error: err});
    }
};

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PSWD}@blog-cluster-db.uqnr4wn.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const blogSchema = require('./models/blog.js');

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('server is running or port 3001');
});

app.use('/blogs', isAuthenticated, blogsRoute);

// app.post('/blogs', (req, res) => {
//     console.log('new user created');
//     res.status(200).send('<h1>new user created</h1>');
// });

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});