const Mongo = require('mongodb').MongoClient;
const mkApi = require('./api');
const cs = require('../../helpers/createConnectionString')(process.env);

const main = async () => {
    const client = await Mongo.connect(cs);
    const db = await client.db(process.env.DB_NAME);
    
    mkApi({
        mainCollection: db.collection(process.env.MAIN_COLLECTION_NAME),
        dynamicCollectionName: process.env.DYNAMIC_COLLECTION_NAME,
    });
};

main();