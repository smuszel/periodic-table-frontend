require('dotenv').config();
const { MongoClient } = require('mongodb');
const apply = require('./applySeeds');
const cs = require('../helpers/createConnectionString')(process.env);
const seed = require('./initial.json');

const main = async () => {
    const client = await MongoClient.connect(cs);
    const db = client.db(process.env.DB_NAME);
    const collNames = {
        main: process.env.MAIN_COLLECTION_NAME,
        dynamic: process.env.DYNAMIC_COLLECTION_NAME,
        error: process.env.ERROR_COLLECTION_NAME,
    }

    await apply(collNames, db, seed);
    process.exit();
}

main();