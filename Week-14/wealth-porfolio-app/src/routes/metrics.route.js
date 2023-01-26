const express = require('express');
const { getAggregate } = require('../controllers/metrics.controller');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let response = await getAggregate(req.user);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

module.exports = router;
