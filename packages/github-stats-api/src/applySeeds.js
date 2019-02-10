const notIncludesName = ns => c => !ns.includes(c.name);
const insertOrCreate = db => c => c.init
    ? db.collection(c.name).insertMany(init)
    : db.createCollection(c.name);

module.exports = async db => {
    const namesInDb = await db.listCollections().toArray();
    const collectionsToAdd = collections.filter(notIncludesName(namesInDb));
    const ps = collectionsToAdd.map(insertOrCreate(db));

    return Promise.all(ps);
};