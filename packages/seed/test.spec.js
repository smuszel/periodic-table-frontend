const assert = require('assert');
const createMockDb = require('../helpers/createTestDb');
const apply = require('./applySeeds');
const seed = require('./initial.json');

const collNames = {
    main: 'm',
    dynamic: 'd',
    error: 'e'
};

module.exports = (async () => {
    const db = await createMockDb();
    await apply(collNames, db, seed);

    const namesInDb = (await db.listCollections().toArray()).map(c => c.name);
    const docs = await Promise.all(namesInDb.map(cn => {
        return db.collection(cn).find().toArray();
    }));

    const totalNumber = docs.reduce((acc, doc) => [...acc, ...doc], []).length;
    const allInitsAreAdded = totalNumber === seed.repos.length * 2 + 1;

    assert(allInitsAreAdded, 'failed to add inits');
    process.exit();
})();