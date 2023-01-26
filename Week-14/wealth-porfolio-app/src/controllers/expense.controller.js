const Expense = require('../models/expense.schema');

// add expense to database
async function addExpense(type, amount, user) {
  try {
    const response = await Expense.create({
      user: user.id,
      type,
      amount,
    });

    return response;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

// get all expenses
async function getAllExpense(user) {
  try {
    const response = await Expense.find({ user: user.id });
    return response;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

// get expense by id
async function getById(id, user) {
  try {
    const response = await Expense.findOne({
      _id: id,
      user: user.id,
    });

    return response;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

// delete expense by ID
async function deleteExpense(id, user) {
  try {
    const result = await Expense.findOneAndDelete({ _id: id, user: user.id });
    return result;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

// update expense
async function updateExpense(expenseId, user, type, amount) {
  try {
    const result = await Expense.updateOne({ user: user.id, _id: expenseId }, { $set: { type, amount } });
    return result;
  } catch (error) {
    throw Error(error);
    console.log(error);
  }
}

// filter expense
async function filterByDate(user, params) {
  try {
    let { from, to } = params;
    const query = { updatedAt: { $gte: new Date(from), $lte: new Date(to) }, username: { $eq: user.id } };
    const result = await Expense.find(query).toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addExpense, getAllExpense, deleteExpense, updateExpense, getById };
