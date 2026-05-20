const express = require('express');
const aplikasi    = express.Router();

aplikasi.get('/', (req, res) => {
  res.redirect('index');
});


aplikasi.get('/base', (req, res) => {
  res.render('aplikasi/base');
});
aplikasi.get('/base/:kategori/:id', (req, res) => {
  const kategori = req.params.kategori;
  const id = req.params.id;

  res.render('aplikasi/baseTerpilih');
});



aplikasi.get('/pasukan', (req, res) => {
  res.render('aplikasi/pasukan');
});




aplikasi.get('/spin', (req, res) => {
  res.render('aplikasi/spin');
})


module.exports = aplikasi;