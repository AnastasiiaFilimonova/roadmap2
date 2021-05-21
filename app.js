require('dotenv').config()
require('./model/mongo/db')
const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 3001;
const User = require ('./model/mongo/User')
const Post = require ('./model/mongo/Post')
const Comment = require ('./model/mongo/Comment')

app.use(cors());

app.use(express.static('public'));


// users
app.get('/users', async (req, res) => {
  res.json({
      items: await User.find()
  });
});

app.get('/users/:id', async (req, res) => {
    res.json({
        item: await User.findOne({id:req.params.id})
    });
  });

// posts
app.get('/posts', async (req, res) => {
  const criteria={}
  if (req.query.userId){
    criteria.userId=req.query.userId
  }
  res.json({
      items: await Post.find(criteria)
  });
});

app.get('/posts/:id', async (req, res) => {
    res.json({
        item: await Post.findOne({id:req.params.id})
    });
  });

  // comments
app.get('/comments', async (req, res) => {
  const criteria={}
  if (req.query.postId){
    criteria.postId=req.query.postId
  }
  res.json({
      items: await Comment.find(criteria)
  });
});

app.get('/comments/:id', async (req, res) => {
    res.json({
        item: await Comment.findOne({id:req.params.id})
    });
  });

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});