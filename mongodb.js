const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const databasename = 'school';
const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(databasename);
    return db.collection('student');
}

module.exports = dbConnect;