const express = require('express');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(3000, () => {
  console.log(`server is up and running on port ${PORT}...`);
});
