import { useEffect, useState } from "react";
import Posts from "../data/data";
import PostList from "./PostList";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import axios from "axios";
const Page = () => {
  const [posts, setPosts] = useState(Posts);
  const [editpost, setEditPost] = useState(null);
  const [error, setError] = useState(null);

  const handleAddPost = async (newpost) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
      const data = {
        id: id.toString(),
        ...newpost,
      };
      const response = await axios.post("http://localhost:8000/posts", data);
      setPosts([...posts, response.data]);
    } catch (error) {
      setError(error.message);
    }
  };
  function handleEdit(postEdit) {
    const data = posts.map((post) =>
      post.id === postEdit.id ? postEdit : post
    );
    setPosts(data);
  }

  function handleDelete(postId) {
    if (confirm("Are you delete this post")) {
      const data = posts.filter((post) => post.id !== postId);
      setPosts(data);
    } else {
      console.log("not delete post");
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios("http://localhost:8000/posts");

        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className="text-center mb-4 mt-4">
        <h1 className="text-2xl text-red-500">This our Todos App</h1>
      </div>
      <div className="allPost text-center w-[300px] p-4">
        <h2 className="text-2xl mb-4">All Post</h2>
        <PostList
          posts={posts}
          onEditClick={setEditPost}
          onDeleteClick={handleDelete}
        />
      </div>
      <hr className="my-5" />
      <div className="from p-4">
        {!editpost ? (
          <AddPost onAddPost={handleAddPost} />
        ) : (
          <EditPost editpost={editpost} onEditPost={handleEdit} />
        )}
      </div>
      {error && (
        <>
          <hr className="pb-5" />{" "}
          <span className="px-4 py-3 rounded text-white text-2xl bg-pink-600 ml-2">
            tha error is - {error}
          </span>
        </>
      )}
    </>
  );
};

export default Page;
