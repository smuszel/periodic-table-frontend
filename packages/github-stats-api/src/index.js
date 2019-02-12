const Mongo = require('mongodb').MongoClient;
const job = require('./job');
const collectionNames = require('./collectionNames');
const initialRepos = require('../seed/initial.json').repos; 

const dbName = 'GithubRepos';
const dbUrl = `mongodb://localhost/${dbName}`;
const interval = 1000 * 60 * 60 * 24;

const main = async () => {
    const client = await Mongo.connect(dbUrl);
    const db = await client.db(dbName);

    await applySeeds(db, initialRepos);
    setInterval(() => job(db), interval);
}

main();