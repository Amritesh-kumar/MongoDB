const dbConnect = require('./mongodb');

const deleteData=async ()=>{
    const db = await dbConnect();
    const result = await db.deleteOne({Class: 12});
    console.log(result);
}

deleteData();