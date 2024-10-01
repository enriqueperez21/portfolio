import mongoose from "mongoose"
import {MONGODB_URI} from './config.js'

export async function connectDB(){
  try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log("Connect correct to ", db.connection.name)
  } catch (error) {
    console.log("Error: "+error)
  }
}

