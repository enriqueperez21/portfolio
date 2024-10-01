import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import {Link} from 'react-router-dom'

export function HomePage() {
  const {posts} = usePosts()
  if(posts.length === 0){return(
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-40 h-40 text-white"/>
        <h2 className="text-white text-2xl">There are no Posts</h2>
      </div>
    )
  }
  return (
    <div className="text-white">

      <Link to="/new">Create New Post</Link>

      {posts.map(post =>(
        <div key={post._id}>
          <h3>Titulo: </h3>
          <h3>{post.tittle}</h3>
          <h3>Description</h3>
          {post.description}
        </div>
      ))}
    </div>
  );
}