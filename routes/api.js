const fs = require('fs').promises;
const path = require('path');

const express = require('express');
const api = express.Router();



api.get('/', (req, res) => {
    res.send({"api":"siap"});
});

api.get('/ambilBase/:th/:kategori/:id', async (req, res) => {
    try {
        const th = req.params.th;
        const kategori = req.params.kategori
        const id = req.params.id;

        const filePath = path.join(__dirname,'..', 'data', 'base', `th${th}.json`);
        
        const rawData = await fs.readFile(filePath, 'utf-8');
        
        const jsonData = JSON.parse(rawData);
        res.json(jsonData);
    } catch(err){
        console.error(err);
        res.status(500).send('Gagal mengambil json');
    }

});
api.get('/base/:id/:kategori/:urutkan', async (req, res) => {
    try {
        const id = req.params.id;
        const kategori = req.params.kategori;
        const urutan = req.params.urutkan;

        const filePath = path.join(__dirname,'..', 'data', 'base', `th${id}.json`);
        
        const rawData = await fs.readFile(filePath, 'utf-8');
        
        const jsonData = JSON.parse(rawData);

        const typeBase = jsonData.find(item => item.kategori === kategori);

        if (typeBase) {
            if(urutan == 0){
                let filterData = typeBase.data;
                const typeBaseFilter = filterData.sort((a, b) => b.rating - a.rating);
                typeBase.data = typeBaseFilter;
                res.json(typeBase);
            } else if(urutan == 1){
                let filterData = typeBase.data;
                const typeBaseFilter = filterData.sort((a, b) => b.id - a.id);
                typeBase.data = typeBaseFilter;
                res.json(typeBase); 
            } else {
                res.json(typeBase); 
            }
        } else {
            // Kalau kategori warBase tidak ada di dalam file JSON tersebut
            res.status(404).json({ error: 'Kategori '+kategori+' tidak ditemukan' });
        }
    } catch(err){
        console.error(err);
        res.status(500).send('Gagal mengambil json');
    }

});








api.get('/pasukanRoll', async (req, res) => {
    try {
        const filePath = path.join(__dirname,'..', 'data', 'spin', `spin.json`);
        
        const rawData = await fs.readFile(filePath, 'utf-8');
        
        const jsonData = JSON.parse(rawData);
        res.json(jsonData.children);
    } catch(err){
        console.error(err);
        res.status(500).send('Gagal mengambil json');
    }
});



api.get('/pasukan/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const filePath = path.join(__dirname,'..', 'data', 'pasukan', `th${id}.json`);
        
        const rawData = await fs.readFile(filePath, 'utf-8');
        
        const jsonData = JSON.parse(rawData);
        res.json(jsonData);
    } catch(err){
        console.error(err);
        res.status(500).send('Gagal mengambil json');
    }

});
api.get('/pasukan/:id/:kategori/:urutkan', async (req, res) => {
    try {
        const id = req.params.id;
        const kategori = req.params.kategori;
        const urutan = req.params.urutkan;

        const filePath = path.join(__dirname,'..', 'data', 'pasukan', `th${id}.json`);
        
        const rawData = await fs.readFile(filePath, 'utf-8');
        
        const jsonData = JSON.parse(rawData);

        const typeBase = jsonData.find(item => item.kategori === kategori);

        if (typeBase) {
            if(urutan == 0){
                let filterData = typeBase.data;
                const typeBaseFilter = filterData.sort((a, b) => b.rating - a.rating);
                typeBase.data = typeBaseFilter;
                res.json(typeBase);
            } else if(urutan == 1){
                let filterData = typeBase.data;
                const typeBaseFilter = filterData.sort((a, b) => b.id - a.id);
                typeBase.data = typeBaseFilter;
                res.json(typeBase); 
            } else {
                res.json(typeBase); 
            }
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