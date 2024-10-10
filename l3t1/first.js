const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let posts = []; // Temporary storage for blog posts

// Route to get all blog posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Route to create a new blog post
app.post('/posts', (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).json(post);
});

// Server listening on port 3000
app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
