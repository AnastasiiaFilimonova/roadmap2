const Post = require('../model/mongo/Post')
const list = async (req, res, next) => {
    try {
        const {skip=0, limit=10}=req.query
        const criteria = {}
        if (req.query.userId) {
            criteria.userId = req.query.userId
        }
        res.json({
            count: await Post.countDocuments(criteria),
            items: await Post.find(criteria).skip(+skip).limit(+limit)
        });
    } catch (error) {
        next(error)
    }

}


const getById = async (req, res, next) => {
    try {
        res.json({
            item: await Post.findOne({ id: req.params.id })
        });
    } catch (error) {
        next(error)
    }

}

module.exports = { list, getById }