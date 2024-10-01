import ExpenseCategory from '../models/expenseCategory.js'

export const getExpenseCategory = async (req, res)=>{
  try {
    const expenseCategory = await ExpenseCategory.find()
    res.send(expenseCategory)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const createExpenseCategory = async (req, res)=>{
  try{
    const data = req.body

    const newCategory = new ExpenseCategory(data)

    await newCategory.save()

    res.json(newCategory)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const updateExpenseCategory = async (req, res)=>{
  try {
    const data = req.body
    const idCategory = req.params.id
    const updateNewCategory = await ExpenseCategory.findByIdAndUpdate(idCategory,data, {new: true})
    res.send(updateNewCategory)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const deleteExpenseCategory = async(req, res)=>{
  try {
    const idCategory = req.params.id
    const categoryRemoved = await ExpenseCategory.findByIdAndDelete(idCategory)
    if(!categoryRemoved){ return res.send("Not found")}
    return res.sendStatus(204)

  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message}) 
  }
}

export const getOneExpenseCategory = async(req, res)=>{
  try {
    const idCategory = req.params.id
    const category = await ExpenseCategory.findById(idCategory)
    if(!category){return res.sendStatus(404)}
    res.json(category)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message}) 
  }
}

export const getSomeExpenseCategory = async(req, res)=>{
  try {
    const idsCategory = req.body.categoriesIds
    const categories = await ExpenseCategory.find({_id: idsCategory})
    if(categories.length == 0){return res.status(400).json({"error": "No se encontró ningún elemento"})}
    res.json(categories)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message}) 
  }
}

export const getSomeExpenseCategoryPrivate = async(categoriesIds)=>{
  try {
    const idsCategory = categoriesIds
    const categories = await ExpenseCategory.find({_id: idsCategory})
    if(categories.length == 0){return null}
    return(categories)
  } catch (error) {
    console.log(error.message)
    return null
  }
}