const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    let response = await authController.register(username, password);
    res.json({ user: response, status: 'ok' });
  } catch (error) {
    res.send({ status: 'error', error: error.message });
  }
});

module.exports = router;
