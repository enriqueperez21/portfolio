import {Router} from 'express'
import {createPosts, deletePost, getPost, getPosts, updatePost} from '../controllers/posts.controllers.js'

const router = Router()

router.get("/posts",getPosts)

router.post("/posts", createPosts)

router.put("/posts/:id", updatePost)

router.delete("/posts/:id", deletePost)

router.get("/posts/:id", getPost)

export default router