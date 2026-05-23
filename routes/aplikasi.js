const fs = require('fs').promises;
const path = require('path');

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







aplikasi.get('/spin', async (req, res) => {
  try {
    res.render('aplikasi/spin', {
      layout: false
    });
  } catch(err){
    console.error(err);
    res.status(500).send('Gagal mengambil json');
  }

})


module.exports = aplikasi;