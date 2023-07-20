// Create web server application

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const comments = require('./comments.json');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.unshift(req.body);
  res.json(req.body);
});

app.listen(8081, () => {
  console.log('Comments server is listening on port 8081!');
});