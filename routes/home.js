const express = require('express');
const home = express.Router();

// Route untuk homepage
home.get('/', (req, res) => {
    res.render('index');
});
home.get('/donate', (req, res) => {
    res.render('donate');
});


module.exports = home;