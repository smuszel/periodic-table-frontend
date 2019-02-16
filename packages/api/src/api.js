const app = require('express')();
const cors = require('cors')();
const rootRoute = require('./rootRoute');
app.use(cors);

module.exports = ({ mainCollection, dynamicCollectionName }) => {
    const lookup = {
        from: dynamicCollectionName,
        localField: 'name',
        foreignField: 'name',
        as: 'history'
    };

    app.get('/', rootRoute(lookup, mainCollection));

    app.listen(80, '0.0.0.0');
}