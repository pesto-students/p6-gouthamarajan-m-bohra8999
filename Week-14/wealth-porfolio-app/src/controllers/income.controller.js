const Income = require('../models/income.schema');

// add Income to database
async function addIncome(type, amount, user) {
  try {
    const response = await Income.create({
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

// get all Incomes
async function getAllIncome(user) {
  try {
    const response = await Income.find({ user: user.id });
    return response;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

// get Income by id
async function getById(id, user) {
  try {
    const response = await Income.findOne({
      _id: id,
      user: user.id,
    });

    return response;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

// delete Income by ID
async function deleteIncome(id, user) {
  try {
    const result = await Income.findOneAndDelete({ _id: id, user: user.id });
    return result;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

// update Income
async function updateIncome(IncomeId, user, type, amount) {
  try {
    const result = await Income.updateOne({ user: user.id, _id: IncomeId }, { $set: { type, amount } });
    return result;
  } catch (error) {
    throw Error(error);
    console.log(error);
  }
}

// filter income
async function filterByDate(user, params) {
  try {
    let { from, to } = params;
    const query = { updatedAt: { $gte: new Date(from), $lte: new Date(to) }, username: { $eq: user.id } };
    const result = await Income.find(query).toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addIncome, getAllIncome, deleteIncome, updateIncome, getById };
