const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

router.post('/register', async (req, res) => {
  const { name, username, password } = req.body;
  try {
    let response = await authController.register(name, username, password);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 403, error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    let response = await authController.login(username, password);
    res.cookie('session', response, { httpOnly: true });
    res.json({ data: [], status: 200 });
  } catch (error) {
    res.send({ status: 401, error: error.message });
  }
});

module.exports = router;
