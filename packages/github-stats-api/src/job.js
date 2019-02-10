const _fetch = require('node-fetch');
const getDynamicInfo = require('./getDynamicInfo');
const fetch = url => _fetch(url, {
    headers: {
        Accept: 'application/json '
    }
}).then(b => b.json());

const fetchDynamicInfo = repo => fetch(repo.url).then(getDynamicInfo);

const createErrEntry = (err, repo) => ({
    where: repo.name,
    when: new Date(),
    original: JSON.stringify(err),
})

const save = coll => info => coll.insertOne(info);

module.exports = (db, meta) => {
    const cursor = db.collection(meta.main.name).find();
    const saveToDI = save(db.collection(meta.dynamic.name));
    const saveToErr = save(db.collection(meta.errors.name));

    cursor.each((_, repo) => {
        fetchDynamicInfo(repo)
            .then(saveToDI)
            .catch(err => saveToErr(createErrEntry(err, repo)))
    });
};