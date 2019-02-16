const getDynamicInfo = require('../helpers/getDynamicInfo');

const zipValues = (obj1, obj2) => {
    return Object.keys(obj1).map(k => {
        return [obj1[k], obj2[k]];
    });
}

module.exports = async (collNames, db, seed) => {
    const inits = {
        main: seed.repos,
        dynamic: seed.repos.map(getDynamicInfo, seed.date),
        errors: [{}],
    };

    const namesInDb = (await db.listCollections().toArray()).map(c => c.name);

    const ps = zipValues(inits, collNames).map(([xs, cn]) => {
        return !namesInDb.includes(cn) && db.collection(cn).insertMany(xs);
    });

    return Promise.all(ps)
}