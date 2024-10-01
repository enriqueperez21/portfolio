import mongoose from "mongoose"

const expenseCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  monthlyBudget: {
    type: Number,
    required: true,
    min: 0,
  },
  idsExpenseSubCategory: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  expectedExpense: {
    type: {
      minimum: {
        type: Number,
        required: true,
        min: 0,
      },
      maximum: {
        type: Number,
        required: true,
      },
    },
  },
  timePeriod: {
    count: {
      type: Number,
      required: true,
      min: 1,
    },
    period: {
      type: String,
      required: true,
      enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
  },
  expectedResult: {
    type: {
      minimum: {
        type: Number,
        required: true,
        min: 0,
      },
      maximum: {
        type: Number,
        required: true,
      },
    },
  },
  expenseSubcategory:{
    type: Array,
  }
}, { collection: 'expenseCategory' });
//Post is the collection
export default mongoose.model('expenseCategory', expenseCategorySchema)