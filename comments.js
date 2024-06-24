// Create web server
// Import express package
const express = require('express');
// Import bodyParser package
const bodyParser = require('body-parser');
// Import comments.js
const comments = require('./comments');
// Create a web server
const app = express();
// Use bodyParser
app.use(bodyParser.json());
// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});
// Create a route to post a comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.postComment(comment);
  res.json(comment);
});
// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Export app
module.exports = app;