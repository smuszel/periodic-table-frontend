const getDynamicInfo = require('../helpers/getDynamicInfo');

const createErrEntry = (err, repo) => ({
    where: repo.name,
    when: new Date(),
    original: JSON.stringify(err),
});

module.exports = async (fetch, { main, dynamic, error }) => {
    const now = new Date();
    const oldRepos = await main.find().toArray();
    const insertToDI = freshRepo => dynamic.insertOne(getDynamicInfo(now)(freshRepo));
    const insertToErr = (err, repo) => error.insertOne(createErrEntry(err, repo));
    const ps = oldRepos.map(repo => fetch(repo.url).then(insertToDI).catch(err => insertToErr(err, repo)));

    return Promise.all(ps);
}