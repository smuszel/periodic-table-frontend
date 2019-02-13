const getDynamicInfo = require('./getDynamicInfo');
const meta = require('./collectionNames');

const createErrEntry = (err, repo) => ({
    where: repo.name,
    when: new Date(),
    original: JSON.stringify(err),
})

module.exports = async (db, fetch) => {
    const now = new Date();
    const oldRepos = await db.collection(meta.main).find().toArray();
    const insertToDI = freshRepo => db.collection(meta.dynamic).insertOne(getDynamicInfo(freshRepo, now));
    const insertToErr = (err, repo) => db.collection(meta.errors).insertOne(createErrEntry(err, repo));
    const ps = oldRepos.map(repo => fetch(repo.url).then(insertToDI).catch(err => insertToErr(err, repo)));

    return Promise.all(ps);
}