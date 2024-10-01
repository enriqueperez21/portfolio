import mongoose from "mongoose"

const expenseSubategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expectedExpense: {
    minimum: {
      type: Number,
      required: true,
    },
    maximum: {
      type: Number,
      required: true,
    },
  },
  isImportant: {
    type: Boolean,
    required: true,
  },
  Expenses: [
    {
      name: {
        type: String,
        required: true,
      },
      cost: {
        minimum: {
          type: Number,
          required: true,
        },
        maximum: {
          type: Number,
          required: true,
        },
      },
      ExpenseType: {
        type: String,
        enum: ["fixed", "variable"],
        required: true,
      },
    },
  ],
}, { collection: 'expenseSubcategory' });
//Post is the collection
export default mongoose.model('expenseSubcategory', expenseSubategorySchema)