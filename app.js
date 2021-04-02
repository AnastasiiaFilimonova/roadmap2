const express = require('express');
const app = express();
const PORT = 3001;
const User = require ('./model/User')
const Post = require ('./model/Post')
const Comment = require ('./model/Comment')

app.use(express.static('public'));


// users
app.get('/users', (req, res) => {
  res.json({
      items: User.list()
  });
});

app.get('/users/:id', (req, res) => {
    res.json({
        items: User.getById(req.params.id)
    });
  });

// posts
app.get('/posts', (req, res) => {
  res.json({
      items: Post.list(req.query.userId)
  });
});

app.get('/posts/:id', (req, res) => {
    res.json({
        items: Post.getById(req.params.id)
    });
  });

  // comments
app.get('/comments', (req, res) => {
  res.json({
      items: Comment.list(req.query.postId)
  });
});

app.get('/comments/:id', (req, res) => {
    res.json({
        items: Comment.getById(req.params.id)
    });
  });

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});