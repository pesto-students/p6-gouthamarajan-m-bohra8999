const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  let response = authController.register(username, password);
  res.json(response);
});

module.exports = router;
