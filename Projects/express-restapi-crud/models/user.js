import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  expenseCategoryIds:{
    type: [mongoose.Schema.Types.ObjectId],
  },
  password:{
    type: String,
    required: true,
  }
}, { collection: 'users' });
//Post is the collection
export default mongoose.model('users', userSchema)