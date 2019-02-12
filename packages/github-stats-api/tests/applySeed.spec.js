const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');
const test = require('tape');
const applySeed = require('../src/applySeeds');
const repos = require('../seed/initial.json').repos;

const mongoServer = new MongoMemoryServer();
const createTestDb = mongoServer.getConnectionString().then(cs => {
    return MongoClient.connect(cs).then(client => {
        let n = 0;
        return () => {
            n++
            return client.db('test' + n);
        }
    });
});

test('seeder makes collections when database is empty', async t => {
    t.plan(1);
    const db = (await createTestDb)();
    await applySeed(db, repos);

    const namesInDb = (await db.listCollections().toArray()).map(c => c.name);
    const docs = await Promise.all(namesInDb.map(cn => {
        return db.collection(cn).find().toArray();
    }));

    const totalNumber = docs.reduce((acc, doc) => [...acc, ...doc], []).length;
    const allInitsAreAdded = totalNumber === repos.length * 2 + 1;

    t.assert(allInitsAreAdded);
 });