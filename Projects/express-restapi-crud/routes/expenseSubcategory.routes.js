import {Router} from 'express'
import { createExpenseSubcategory, deleteExpenseSubcategory, getExpenseSubcategory, getOneExpenseSubcategory, getSomeExpenseSubcategory, updateExpenseSubcategory } from '../controllers/expenseSubcategory.controllers.js'
import { idValidatorSubcategory, idsValidatorSubcategory } from '../validators/req.validators.js'


const router = Router()

router.get("/", getExpenseSubcategory)

router.post("/", createExpenseSubcategory)

router.put("/byId/:id", idValidatorSubcategory, updateExpenseSubcategory)

router.delete("/byId/:id", idValidatorSubcategory, deleteExpenseSubcategory)

router.get("/byId/:id", idValidatorSubcategory, getOneExpenseSubcategory)

router.get("/getSomes", idsValidatorSubcategory, getSomeExpenseSubcategory)

export default router