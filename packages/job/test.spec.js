const job = require('./src/job');
const createTestDb = require('../helpers/createTestDb');
const assert = require('assert');

const repoFixture = {
    url: 'abc',
    stargazers_count: 1,
    size: 2,
    forks_count: 3,
    open_issues: 4,
};

module.exports = async () => {
    const db = await createTestDb();
    await db.collection('main').insertOne(repoFixture)
    const fetch = () => Promise.resolve(repoFixture);
    await job(db, fetch);
    const nAdded = await db.collection(meta.dynamic).find().count();

    assert(nAdded === 1);
};