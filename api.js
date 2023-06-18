const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = ('mongodb');
const app = express();

// API test
app.get('/api',(req, res) => {
    res.json("Hello");
});

// Get record 
app.get('/getdata', async(req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
})

// Insert code
app.use(express.json());

app.post('/insert',async (req, res)=>{
    //console.log(req.body);
    let data = await dbConnect();
    let result = data.insertOne(req.body);
    res.send(result);
})

app.listen(3000);
