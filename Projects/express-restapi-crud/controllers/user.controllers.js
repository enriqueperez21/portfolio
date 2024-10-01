import Users from '../models/user.js'
import { getSomeExpenseCategoryPrivate } from './expenseCategory.controllers.js'
import { getSomeExpenseSubcategoryPrivate } from './expenseSubcategory.controllers.js'

export const Allusers = async (req, res)=>{
  try {
    const user = await Users.find()
    res.send(user)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const oneUser = async (req, res)=>{
  try {
    const userEmail = req.params.email
    const user = await Users.find({email: userEmail})
    res.send(user)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const allUserData = async (req, res)=>{
  try {
    const userEmail = req.params.email
    const user = await Users.findOne({email: userEmail})
    const UserExpenseCategory = await getSomeExpenseCategoryPrivate(user.expenseCategoryIds)
    const subExpenseCategoryIds = UserExpenseCategory[0].idsExpenseSubCategory
    console.log(subExpenseCategoryIds)
    await Promise.all(
      UserExpenseCategory.map(async (expenseCategory) => {
        const subCategoryIds = expenseCategory.idsExpenseSubCategory;
        const subCategoryData = await getSomeExpenseSubcategoryPrivate(subCategoryIds);
        expenseCategory.expenseSubcategory = subCategoryData;
      })
    );
    const UserData ={
      user,
      UserExpenseCategory,
    }
    res.send(UserData)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const updateUser = async (req, res)=>{
  try {
    const data = req.body
    const userEmail = req.params.email
    const updateUser = await Users.findOneAndUpdate({email: userEmail},data, {new: true})
    res.send(updateUser)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}