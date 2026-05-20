require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.title = "elplongor "; // Jika tidak ada title, pakai ini
    next();
});

// Setup EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');



app.locals.viewsDir = path.join(__dirname, 'views');


// Routes
app.use('/', require('./routes/home'));
app.use('/api', require('./routes/api'));
app.use('/aplikasi', require('./routes/aplikasi'));


app.use((req, res, next) => {
    res.status(404).render('404', { 
        title: '404 - Halaman Tidak Ditemukan',
        layout: 'layouts/main' // Pastikan ini merujuk ke layout yang benar
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});