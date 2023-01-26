const Expense = require('../models/expense.schema');
const Income = require('../models/income.schema');

// add expense to database
async function getAggregate(user) {
  try {
    let result = [];
    const pipeline = [
      {
        $match: {
          user: user.id,
        },
      },
      {
        $project: {
          year: { $year: '$updatedAt' },
          amount: {
            $convert: {
              input: '$amount',
              to: 'double',
            },
          },
          type: 1,
        },
      },
      {
        $group: {
          _id: { year: '$year' },
          totalAmount: { $sum: '$amount' },
        },
      },
      {
        $sort: { '_id.year': 1 },
      },
    ];

    let expense = await Expense.aggregate(pipeline);
    let income = await Income.aggregate(pipeline);
    result = { expense, income };
    return result;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

module.exports = { getAggregate };
