require('dotenv').config();
const express = require('express');
const path = require('path');
const apiRoutes = require('./src/routes');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());

app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// Defining view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

// index page
app.get('/', function (req, res) {
  res.render('pages/index');
});

// test
// app.post('/test', function (req, res) {
//   res.cookie('session', '12345', { httpOnly: true });
//   res.send('Cookie set!');
// });
// app.get('/test', function (req, res) {
//   const sessionCookie = req.cookies.session;
//   res.send(`Your session cookie is: ${sessionCookie}`);
// });

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
