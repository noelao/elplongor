const express = require('express');
const home = express.Router();

// Route untuk homepage
home.get('/', (req, res) => {
    res.render('index');
});


module.exports = home;