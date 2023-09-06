const express = require('express');
const blogsRoute = express.Router();

blogsRoute.post('/', (req, res) => {
    try{
        res.status(200).send(true);
    } catch (err) {
        res.status(500).send(false);
    }
});

blogsRoute.get('/', (req, res) => {
    res.status(404).send('<h1>404 Client Error</h1>');
});

module.exports = blogsRoute;