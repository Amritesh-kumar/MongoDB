const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = ('mongodb');
const app = express();

app.get('/api',(req, res) => {
    res.json("Hello");
});

app.listen(3000);