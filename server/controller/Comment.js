const Comment = require('../model/mongo/Comment')
const list = async (req, res, next) => {
    try {
        const {skip=0, limit=10}=req.query
        const criteria = {}
        if (req.query.postId) {
            criteria.postId = req.query.postId
        }
        res.json({
            count: await Comment.countDocuments(criteria),
            items: await Comment.find(criteria).skip(+skip).limit(+limit)
        });
    } catch (error) {
        next(error)
    }

}

const getById = async (req, res, next) => {
    try {
        res.json({
            item: await Comment.findOne({ id: req.params.id })
        });
    } catch (error) {
        next(error)
    }

}

module.exports = { list, getById }