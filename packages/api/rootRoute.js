module.exports = ($lookup, mainCollection) => async (req, res) => {
    const repos = await mainCollection.aggregate([{ $lookup }]).toArray();
    res.json(repos);
};