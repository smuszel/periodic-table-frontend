const job = require('./src/job');
const createTestDb = require('../helpers/createTestDb');
const assert = require('assert');
const seed = require('../seed/initial.json');
const repoFixture = seed.repos[0];

module.exports = (async () => {
    const db = await createTestDb();
    const collections = {
        main: db.collection('m'),
        dynamic: db.collection('d'),
        error: db.collection('e'),
    };

    await collections.main.insertOne(repoFixture)
    const fetch = () => Promise.resolve(repoFixture);
    await job(fetch, collections);
    const xs = await collections.dynamic.find().toArray();
    const instance = xs[0];

    assert(!!instance);
    process.exit();
})();