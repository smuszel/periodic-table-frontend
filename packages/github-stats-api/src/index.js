const Mongo = require('mongodb').MongoClient;
const applySeeds = require('./applySeeds');
const job = require('./job');
const collectionsMetadata = require('./collectionsMetadata');

const dbName = 'GithubRepos';
const dbUrl = `mongodb://localhost/${dbName}`;
const interval = 1000 * 60 * 60 * 24;

const main = async () => {
    const client = await Mongo.connect(dbUrl);
    const db = await client.db(dbName);

    await applySeeds(db, collectionsMetadata);
    setInterval(() => job(db, collectionsMetadata), interval);
}

main();