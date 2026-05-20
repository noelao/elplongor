const fs = require('fs').promises;
const path = require('path');

const express = require('express');
const api = express.Router();



api.get('/', (req, res) => {
    res.send({"api":"siap"});
});

api.get('/base/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const filePath = path.join(__dirname,'..', 'data', 'th', `th${id}.json`);
        
        const rawData = await fs.readFile(filePath, 'utf-8');
        
        const jsonData = JSON.parse(rawData);
        res.json(jsonData);
    } catch(err){
        console.error(err);
        res.status(500).send('Gagal mengambil json');
    }

});
api.get('/base/:id/:kategori', async (req, res) => {
    try {
        const id = req.params.id;
        const kategori = req.params.kategori;

        const filePath = path.join(__dirname,'..', 'data', 'th', `th${id}.json`);
        
        const rawData = await fs.readFile(filePath, 'utf-8');
        
        const jsonData = JSON.parse(rawData);

        const typeBase = jsonData.find(item => item.kategori === kategori);

        if (typeBase) {
            res.json(typeBase); 
        } else {
            // Kalau kategori warBase tidak ada di dalam file JSON tersebut
            res.status(404).json({ error: 'Kategori '+kategori+' tidak ditemukan' });
        }
    } catch(err){
        console.error(err);
        res.status(500).send('Gagal mengambil json');
    }

});

module.exports = api;