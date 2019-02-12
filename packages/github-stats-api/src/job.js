const _fetch = require('node-fetch');
const getDynamicInfo = require('./getDynamicInfo');
const meta = require('./collectionNames');
const fetch = url => _fetch(url, {
    headers: {
        Accept: 'application/json '
    }
}).then(b => b.json());
// remove fetch

const fetchDynamicInfo = repo => fetch(repo.url).then(getDynamicInfo);

const createErrEntry = (err, repo) => ({
    where: repo.name,
    when: new Date(),
    original: JSON.stringify(err),
})

module.exports = db => {
    const cursor = db.collection(meta.main).find();
    const insertToDI = xs => db.collection(meta.dynamic).insertMany(xs);
    const insertToErr = xs => db.collection(meta.errors).insertMany(xs);

    cursor.each((_, repo) => {
        fetchDynamicInfo(repo)
            .then(insertToDI)
            .catch(err => insertToErr(createErrEntry(err, repo)))
    });
};