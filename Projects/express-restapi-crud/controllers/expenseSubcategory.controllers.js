import expenseSubcategory from "../models/expenseSubcategory.js"

export const getExpenseSubcategory = async (req, res)=>{
  try {
    const allExpenseSubCategory = await expenseSubcategory.find()
    res.send(allExpenseSubCategory)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}

export const createExpenseSubcategory = async (req, res)=>{
  try{
    const data = req.body
    const newSubcategory = new expenseSubcategory(data)
    await newSubcategory.save()
    res.json(newSubcategory)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}

export const updateExpenseSubcategory = async (req, res)=>{
  try {
    const data = req.body
    const idSubcategory = req.params.id
    const updateNewSubCategory = await expenseSubcategory.findByIdAndUpdate(idSubcategory,data, {new: true})
    res.send(updateNewSubCategory)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}

export const deleteExpenseSubcategory = async(req, res)=>{
  try {
    const idSubcategory = req.params.id
    const subCategoryRemoved = await expenseSubcategory.findByIdAndDelete(idSubcategory)
    if(!subCategoryRemoved){ return res.send("Not found")}
    return res.sendStatus(204)

  }catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message}) 
  }
}

export const getOneExpenseSubcategory = async(req, res)=>{
  try {
    const idSubcategory = req.params.id
    const subCategories = await expenseSubcategory.findById(idSubcategory)
    if(!subCategories){return res.sendStatus(404)}
    res.json(subCategories)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message}) 
  }
}

export const getSomeExpenseSubcategory = async(req, res)=>{
  try {
    const idsSubcategory = req.body.subcategoriesIds
    const subCategories = await expenseSubcategory.find({_id: idsSubcategory})
    if(subCategories.length == 0){return res.status(400).json({"error": "No se encontró ningún elemento"})}
    res.json(subCategories)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message}) 
  }
}

export const getSomeExpenseSubcategoryPrivate = async(subcategoriesIds)=>{
  try {
    const idsSubcategory = subcategoriesIds
    const categories = await expenseSubcategory.find({_id: idsSubcategory})
    if(categories.length == 0){return null}
    return(categories)
  } catch (error) {
    console.log(error.message)
    return null
  }
}