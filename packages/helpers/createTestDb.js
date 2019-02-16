const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');
const mongoServer = new MongoMemoryServer();

let n = 0;
const client = mongoServer.getConnectionString().then(MongoClient.connect);

module.exports = async () => {
    const c = await client;
    const db = c.db('test_' + ++n);

    return db;
}
