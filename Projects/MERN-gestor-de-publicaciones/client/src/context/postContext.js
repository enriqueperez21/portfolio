import { useState, createContext, useContext, useEffect } from "react"
import { getPostRequests } from "../api/posts"

const context = createContext()

export const usePosts = () =>{
  return useContext(context)
}

export const PostProvider = ({children}) =>{
  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    const res = await getPostRequests()
    setPosts(res.data)
  }

  useEffect(() =>{
    getPosts()
  }, [])
  return (
    <context.Provider value={{
      posts,
    }}>
      {children}
    </context.Provider>)
  
}