const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = ('mongodb');
const app = express();

app.get('/api',(req, res) => {
    res.json("Hello");
});

app.get('/getdata', async(req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
})

app.listen(3000);
