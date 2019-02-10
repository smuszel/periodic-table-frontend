const app = require('express')();
const cors = require('cors')();

app.use(cors);

app.get('/', (req, res) => {
    res.send('exp');
});

module.exports = () => {
    app.listen(8001, '0.0.0.0');
}