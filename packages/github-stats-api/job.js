const dbClient = require('mongodb').MongoClient;
const fetch = require('node-fetch');

const interval = 1000 * 60 * 60 * 24;
const dbUrl = 'mongodb://localhost/GhRepos'

const extractDynamicInfo = repo => ({
    stars: repo.stargazers_count,
    size: repo.size,
    forks: reopo.forks_count,
    open_issues: repo.open_issues,
});

const getDynamicInfo = repo => {
    return fetch(repo.url)
        .then(res => res.json())
        .then(extractDynamicInfo)
}

const createErrEntry = (err, repo) => ({
    where: repo.name,
    when: new Date(),
    original: JSON.stringify(err)
})

const save = coll => info => {
    coll.insertOne(info)
}

const run = db => () => {
    const cursor = db.collection('repos').find();
    const saveToDI = save(db.collection('repos_di'));
    const saveToErr = save(db.collection('repos_err'));

    cursor.each((_, repo) => {
        getDynamicInfo(repo)
            .then(saveToDI)
            .catch(err => saveToErr(createErrEntry(err, repo)))
    })
}

const main = () => {
    dbClient.connect(dbUrl, db => {
        setInterval(run(db), interval);
    })
}

module.exports = main