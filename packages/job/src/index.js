const { MongoClient } = require('mongodb');
const job = require('./job');
const _fetch = require('node-fetch');
const cs = require('../../helpers/createConnectionString')(process.env);
const cst = require('../../helpers/buildArgs');
const token = process.env.GH_TOKEN;
const headers = { Accept: 'application/json', Authorization: `token ${token}` };
const fetch = url => _fetch(url, { headers }).then(b => b.json());

const main = async () => {
    const client = await MongoClient.connect(cs);
    const db = await client.db(process.env.DB_NAME);
    const collections = {
        main: db.collection(cst.MAIN_COLLECTION_NAME),
        dynamic: db.collection(cst.DYNAMIC_COLLECTION_NAME),
        error: db.collection(cst.ERROR_COLLECTION_NAME),
    };

    const r = await collections.dynamic.find({ name: 'react' }).toArray();
    setInterval(() => job(fetch, collections), cst.JOB_INTERVAL);
}

main();