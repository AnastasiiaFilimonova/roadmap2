const express = require('express');
const app = express();
const PORT = 3001;
const User = require ('./model/User')

app.use(express.static('public'));

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

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});