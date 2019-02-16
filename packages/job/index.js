const Mongo = require('mongodb').MongoClient;
const job = require('./job');
const _fetch = require('node-fetch');
const cs = require('../helpers/connectionString');
const fetch = url => _fetch(url, {
    headers: {
        Accept: 'application/json '
    }
}).then(b => b.json());

const main = async () => {
    const client = await Mongo.connect(cs);
    const db = await client.db(dbname);
    const collections = {
        main: db.collection(process.env.MAIN_COLLECTION_NAME),
        dynamic: db.collection(process.env.DYNAMIC_COLLECTION_NAME),
        error: db.collection(process.env.ERROR_COLLECTION_NAME),
    };

    setInterval(() => job(fetch, collections), +process.env.JOB_INTERVAL);
}

main();