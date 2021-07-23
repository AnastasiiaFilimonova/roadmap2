const Comment = require('../model/mongo/Comment')
const list = async (req, res) => {
    const criteria = {}
    if (req.query.postId) {
        criteria.postId = req.query.postId
    }
    res.json({
        items: await Comment.find(criteria)
    });
}

const getById = async (req, res) => {
    res.json({
        item: await Comment.findOne({ id: req.params.id })
    });
}

module.exports = { list, getById }