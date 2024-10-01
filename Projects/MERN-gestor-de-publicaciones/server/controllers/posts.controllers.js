import { deleteImage, uploadImage } from '../libs/cloudinary.js'
import Post from '../models/Post.js'
import fs from 'fs-extra'

export const getPosts = async (req, res)=>{
  try {
    const posts = await Post.find()
    res.send(posts)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const createPosts = async (req, res)=>{
  try{
    const {tittle, description} = req.body
    let image = null
    let localImageSaved = req.files?.image
    let pathLocalImage = null
    if(localImageSaved){
      pathLocalImage = req.files.image.tempFilePath
      const result = await uploadImage(pathLocalImage)
      await fs.remove(pathLocalImage)
      console.log(result)
      image = {
        url: result.secure_url,
        public_id: result.public_id
      }
    }

    const newPost = new Post({tittle, description, image})

    await newPost.save()

    res.json(newPost)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const updatePost = async (req, res)=>{
  try {
    const data = req.body
    const idPost = req.params.id
    const updatePost = await Post.findByIdAndUpdate(idPost,data, {new: true})
    res.send(updatePost)
  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
}

export const deletePost = async(req, res)=>{
  try {
    const idPost = req.params.id
    const postRemoved = await Post.findByIdAndDelete(idPost)
    if(!postRemoved){ return res.send("Not found")}
    const idImage = postRemoved.image.public_id
    if(idImage){
      await deleteImage(idImage)
    }
    return res.sendStatus(204)

  }catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message}) 
  }
}

export const getPost = async(req, res)=>{
  try {
    const idPost = req.params.id
    const post = await Post.findById(idPost)
    if(!post){return res.sendStatus(404)}
    res.json(post)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message}) 
  }
}