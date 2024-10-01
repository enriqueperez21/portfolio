import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || "mongodb://localhost/testdb"
export const MONGODB_URI = process.env.MONGODB_URI || 4000