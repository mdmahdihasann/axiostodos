import { useState } from "react";
import Posts from "../data/data";
import PostList from "./PostList";
import AddPost from "./AddPost";
import EditPost from "./EditPost"
const Page = () => {
  const [posts, setPosts] = useState(Posts);
  const [editpost, seEditPost] = useState(null)

  function handleAddPost(newpost) {
    setPosts([...posts, newpost])
  }
  function handleEdit(postEdit){
    const data = posts.map((post)=> post.id === postEdit.id ? postEdit : post)
    seEditPost(data)
  }

  return (
    <>
      <div className="text-center mb-4 mt-4">
        <h1 className="text-2xl text-red-500">This our Todos App</h1>
      </div>
      <div className="allPost text-center w-[300px] p-4">
        <h2 className="text-2xl mb-4">All Post</h2>
        <PostList posts={posts} onEditClick={seEditPost}/>
      </div>
      <hr className="my-5" />
      <div className="from p-4">
        
        {
            posts ? <AddPost onAddPost={handleAddPost}/> : <EditPost editpost={editpost} onEditPost={handleEdit}/> 
        }
        
      </div>
    </>
  );
};

export default Page;
