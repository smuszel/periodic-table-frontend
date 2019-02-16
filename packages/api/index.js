const Mongo = require('mongodb').MongoClient;
const app = require('express')();
const cors = require('cors')();
const mkApi = require('./api');
const cs = require('../helpers/connectionString');

const main = async () => {
    const client = await Mongo.connect(cs);
    app.use(cors);
    const db = await client.db(dbName);
    const port = process.env.API_PORT;
    const mainCollection = db.collection(process.env.MAIN_COLLECTION_NAME);
    
    mkApi(port, app, mainCollection);
}

main();