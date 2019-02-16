const assert = require('assert');
const createMockDb = require('../helpers/createTestDb');

module.exports = async () => {
    const db = await createMockDb();
    await applySeed(db, repos);

    const namesInDb = (await db.listCollections().toArray()).map(c => c.name);
    const docs = await Promise.all(namesInDb.map(cn => {
        return db.collection(cn).find().toArray();
    }));

    const totalNumber = docs.reduce((acc, doc) => [...acc, ...doc], []).length;
    const allInitsAreAdded = totalNumber === repos.length * 2 + 1;

    assert(allInitsAreAdded, 'failed to add inits');
}