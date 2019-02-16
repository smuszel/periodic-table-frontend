module.exports = ({ DB_USERNAME, DB_PASSWORD, DROPLET_ADDRESS, DB_NAME }) => {
    return `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DROPLET_ADDRESS}/${DB_NAME}`
};