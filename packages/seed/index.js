require('dotenv').config();
const { MongoClient } = require('mongodb');
const apply = require('./applySeeds');
const cs = require('../helpers/createConnectionString')(process.env);
const cst = require('../helpers/buildArgs');
const seed = require('./initial.json');

const main = async () => {
    const client = await MongoClient.connect(cs, { useNewUrlParser: true });
    const db = client.db(process.env.DB_NAME);
    const collNames = {
        main: cst.MAIN_COLLECTION_NAME,
        dynamic: cst.DYNAMIC_COLLECTION_NAME,
        error: cst.ERROR_COLLECTION_NAME,
    }

    await apply(collNames, db, seed);
    process.exit();
}

main();