import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  tittle :{
    type: String,
    required: true,
    //trim quita espacios extra
    trim: true,
  },
  description :{
    type: String,
    required: true,
    trim: true,
  },
  image :{
    url: String,
    public_id: String,
  },
})
//Post is the collection
export default mongoose.model('Post', postSchema)