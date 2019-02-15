const app = require('express')();
const cors = require('cors')();
const meta = require('./collectionNames');

const $lookup = {
    from: meta.dynamic,
    localField: 'name',
    foreignField: 'name',
    as: 'history'
};

let _db;

app.use(cors);

app.get('/', (req, res) => {
    _db.collection(meta.main).aggregate([{ $lookup }]).then(repos => {
        res.json(repos);
    });
});

module.exports = db => {
    _db = db;
    app.listen(8001, '0.0.0.0');

    return app;
}