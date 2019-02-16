const username = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
const ip = proces.env.DROPLET_ADDRESS;
const dbname = process.env.DB_NAME;
module.exports = `mongodb://${username}:${pass}@${ip}/${dbname}`;