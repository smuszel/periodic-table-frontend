const getDynamicInfo = require('../helpers/getDynamicInfo');

module.exports = async (collNames, db, seed) => {
    const inits = {
        main: seed.repos,
        dynamic: seed.repos.map(getDynamicInfo(seed.date)),
        error: [{}],
    };

    const namesInDb = (await db.listCollections().toArray()).map(c => c.name);
    const helper = n => !namesInDb.includes(collNames[n]) && db.collection(collNames[n]).insertMany(inits[n]);
    const ps = Object.keys(collNames).map(helper).filter(x => !!x);

    return Promise.all(ps)
}