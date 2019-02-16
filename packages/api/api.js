const app = require('express')();
const cors = require('cors')();
const rootRoute = require('./rootRoute');
app.use(cors);

module.exports = ({ port, mainCollection, dynamicCollectionName }) => {
    const lookup = {
        from: dynamicCollectionName,
        localField: 'name',
        foreignField: 'name',
        as: 'history'
    };

    app.get('/', rootRoute(lookup, mainCollection));

    app.listen(port, '0.0.0.0');
}