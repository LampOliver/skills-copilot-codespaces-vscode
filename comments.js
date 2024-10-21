// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create an array of comments
let comments = [];
// Create a GET route that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Create a POST route that adds a new comment
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json({ message: 'Comment added' });
});
// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});