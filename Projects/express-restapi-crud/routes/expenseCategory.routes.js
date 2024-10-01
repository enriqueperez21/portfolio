import {Router} from 'express'
import { createExpenseCategory, deleteExpenseCategory, getExpenseCategory, getOneExpenseCategory, getSomeExpenseCategory, updateExpenseCategory } from '../controllers/expenseCategory.controllers.js'
import { idValidatorCategory, idsValidatorCategory } from '../validators/req.validators.js'


const router = Router()

router.get("/",getExpenseCategory)

router.post("/", createExpenseCategory)

router.put("/byId/:id", idValidatorCategory, updateExpenseCategory)

router.delete("/byId/:id", idValidatorCategory, deleteExpenseCategory)

router.get("/byId/:id", idValidatorCategory, getOneExpenseCategory)

router.get("/getSomes", idsValidatorCategory, getSomeExpenseCategory)

router.get("/easteregg", (req, res)=>{
    res.send("Te amo mucho cariño <3, mi esposa")
})

export default router