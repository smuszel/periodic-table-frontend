const assert = require('assert');
const rootRoute = require('./src/rootRoute');
const createTestDb = require('../helpers/createTestDb');
const getDynamicInfo = require('../helpers/getDynamicInfo');
const seed = require('../seed/initial.json');

const nHistory = 5;
const mainFixture = seed.repos[0];
const dynFixtures = Array(nHistory).fill(null).map(() => getDynamicInfo(new Date())(mainFixture));

module.exports = (async () => {
    const db = await createTestDb();
    const dynamicCollectionName = 'd';
    const lookup = {
        from: dynamicCollectionName,
        localField: 'name',
        foreignField: 'name',
        as: 'history'
    };
    const mainCollection = db.collection('m');
    await mainCollection.insertOne(mainFixture);
    await db.collection(dynamicCollectionName).insertMany(dynFixtures);
    const route = rootRoute(lookup, mainCollection);

    let res = [{ history: [] }];
    const response = { json: xs => (res = xs) };

    await route(null, response);

    const instance = res[0];
    const hist = instance.history[nHistory - 1];

    assert(!!hist);
    process.exit();
});