const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense.controller');
const moment = require('moment');

router.post('/create', async (req, res) => {
  const { type, amount } = req.body;
  try {
    const user = req.user;
    let response = await expenseController.addExpense(type, amount, user);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const user = req.user;
    let response = await expenseController.getAllExpense(user);
    console.log(response);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = req.user;
    let response = await expenseController.deleteExpense(req.params.id, user);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = req.user;
    const { type, amount } = req.body;
    let response = await expenseController.updateExpense(req.params.id, user, type, amount);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = req.user;
    let response = await expenseController.getById(req.params.id, user);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

module.exports = router;
