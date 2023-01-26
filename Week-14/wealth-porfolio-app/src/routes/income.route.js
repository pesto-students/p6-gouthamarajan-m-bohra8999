const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/income.controller');
const SendMail = require('../utility/sendEmail');

router.post('/create', async (req, res) => {
  const { type, amount } = req.body;
  try {
    const user = req.user;
    let response = await incomeController.addIncome(type, amount, user);
    SendMail.sendTo(user.email, SendMail.templates.expenseTemplate);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const user = req.user;
    let response = await incomeController.getAllIncome(user);
    console.log(response);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = req.user;
    let response = await incomeController.deleteIncome(req.params.id, user);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = req.user;
    const { type, amount } = req.body;
    let response = await incomeController.updateIncome(req.params.id, user, type, amount);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = req.user;
    let response = await incomeController.getById(req.params.id, user);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

router.get('/filter', async (req, res) => {
  try {
    const user = req.user;
    let response = await expenseController.filter(user, req.params);
    res.json({ data: response, status: 200 });
  } catch (error) {
    res.send({ status: 409, error: error.message });
  }
});

module.exports = router;
