const express = require('express');
const path = require('path');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Defining view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});

app.listen(3000, () => {
  console.log(`server is up and running on port ${PORT}...`);
});
