const { MAIN_COLLECTION_NAME, DYNAMIC_COLLECTION_NAME } = require('../../helpers/buildArgs');
const { MongoClient } = require('mongodb');
const mkApi = require('./api');
const cs = require('../../helpers/createConnectionString')(process.env);

const main = async () => {
    const client = await MongoClient.connect(cs, { useNewUrlParser: true });
    const db = await client.db(process.env.DB_NAME);
    
    mkApi({
        mainCollection: db.collection(MAIN_COLLECTION_NAME),
        dynamicCollectionName: DYNAMIC_COLLECTION_NAME,
    });
};

main();