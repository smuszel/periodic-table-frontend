const $lookup = {
    from: meta.dynamic,
    localField: 'name',
    foreignField: 'name',
    as: 'history'
};

module.exports = (port, app, mainCollection) => {
    app.get('/', (req, res) => {
        mainCollection.aggregate([{ $lookup }]).then(repos => {
            res.json(repos);
        });
    });

    app.listen(port, '0.0.0.0');
}