const app = require('express')();
const cors = require('cors')();

let _db;

app.use(cors);

app.get('/', (req, res) => {
    _db.collection()
    res.send('exp');
});

module.exports = db => {
    _db = db;
    app.listen(8001, '0.0.0.0');
}