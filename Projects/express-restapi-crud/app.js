import express from 'express'
import expenseCategoryRoutes from './routes/expenseCategory.routes.js'
import expenseSubcategoryRoutes from './routes/expenseSubcategory.routes.js'
import userRoutes from './routes/user.routes.js'
import morgan from 'morgan'

const app = express()

const logger = morgan('tiny')
//Middlewares
app.use(logger)
app.use(express.json())

app.use("/expenseCategory",expenseCategoryRoutes)
app.use("/expenseSubcategory",expenseSubcategoryRoutes)
app.use("/users", userRoutes)

export default app