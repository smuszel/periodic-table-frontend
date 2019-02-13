const Mongo = require('mongodb').MongoClient;
const job = require('./job');
const seed = require('../seed/initial.json'); 
const _fetch = require('node-fetch');
const fetch = url => _fetch(url, {
    headers: {
        Accept: 'application/json '
    }
}).then(b => b.json());

const dbName = 'sandbox';
const dbUrl = `mongodb://localhost/${dbName}`;
const interval = 1000 * 60 * 60 * 24;

const main = async () => {
    const client = await Mongo.connect(dbUrl);
    const db = await client.db(dbName);

    await applySeeds(db, seed);
    setInterval(() => job(db, fetch), interval);
}

main();