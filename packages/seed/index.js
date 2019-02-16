const Mongo = require('mongodb').MongoClient;
const apply = require('./applySeeds');
const cs = require('../helpers/connectionString');
const seed = require('./initial.json');

const main = async () => {
    const db = Mongo.connect(cs);
    const collNames = {
        main: process.env.MAIN_COLLECTION_NAME,
        dynamic: process.env.DYNAMIC_COLLECTION_NAME,
        error: process.env.ERROR_COLLECTION_NAME,
    }

    apply(collNames, db, seed);
}

main();