const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'UserSchema' },
    type: { type: String, required: true },
    amount: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
  },
  {
    timestamps: true,
    collection: 'expense',
  }
);

module.exports = mongoose.model('ExpenseSchema', ExpenseSchema);
