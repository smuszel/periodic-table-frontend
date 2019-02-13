const getDynamicInfo = require('./getDynamicInfo');
const collectionNames = require('./collectionNames');

const zipValues = (obj1, obj2) => {
    return Object.keys(obj1).map(k => {
        return [obj1[k], obj2[k]];
    });
}

module.exports = async (db, seed) => {
    const inits = {
        main: seed.repos,
        dynamic: repos.map(getDynamicInfo, seed.date),
        errors: [{}],
    }

    const namesInDb = (await db.listCollections().toArray()).map(c => c.name);

    const ps = zipValues(inits, collectionNames).map(([xs, cn]) => {
        return !namesInDb.includes(cn) && db.collection(cn).insertMany(xs);
    });

    return Promise.all(ps)
}