const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');
const expenseRoutes = require('./expense.route');
const incomeRoutes = require('./income.route');
const jwt = require('jsonwebtoken');

const checkSession = (req, res, next) => {
  const token = req.cookies.session;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

router.use('/auth', authRoutes);

// below routes are authourized only
router.use(checkSession);
router.use('/expense', expenseRoutes);
router.use('/income', incomeRoutes);

module.exports = router;
