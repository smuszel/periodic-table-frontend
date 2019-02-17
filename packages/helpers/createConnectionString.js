module.exports = ({ DB_USERNAME, DB_PASSWORD, DB_ADDRESS, DB_NAME }) => {
    return `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_ADDRESS}/${DB_NAME}`
};