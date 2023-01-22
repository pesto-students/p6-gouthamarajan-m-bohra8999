require('dotenv').config();
const express = require('express');
const path = require('path');
const apiRoutes = require('./src/routes');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Defining view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});

// register page
app.get('/register', (req, res) => {
  res.render('pages/register');
});

// api routes
app.use('/api', apiRoutes);

connectDB();

app.listen(3000, () => {
  console.log(`server is up and running on port ${PORT}...`);
});
