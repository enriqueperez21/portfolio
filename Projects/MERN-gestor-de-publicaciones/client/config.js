import dotenv from 'dotenv'

dotenv.config()

export const SERVER_LINK = process.env.PORT || "mongodb://localhost/testdb"