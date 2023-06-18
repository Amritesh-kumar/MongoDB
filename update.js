const dbConnect = require('./mongodb');

const updateData=async ()=>{
    const db =await dbConnect();
    const result = await db.updateOne(
        {Class: 12}, {$set:{name: 'Amit'}}
    );
    console.log(result);
}

updateData();