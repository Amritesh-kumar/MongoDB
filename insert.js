const dbConnect = require('./mongodb');

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertOne(
        {
            name: 'Amit', Address: 'Ranchi', Class: 12
        }
    );
    console.log(result);
}

insert();