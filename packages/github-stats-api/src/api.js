const app = require('express')();
const cors = require('cors')();
const meta = require('./collectionNames');

let _db;

app.use(cors);

app.get('/', async (req, res) => {
    const mainRepos = await _db.collection(meta.main).find().forEach(repo => {
        _db.collection(meta.dynamic).find();
    });
    const freshReposJoined = mainRepos.fi
    res.send('exp');
});

module.exports = db => {
    _db = db;
    app.listen(8001, '0.0.0.0');

    return app;
}