import { useState } from "react";

const AddPost = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function onhandleSubmit(e) {
    e.preventDefault();
    const inputData = {
      title,
      description,
    };
    onAddPost(inputData);

    setTitle(" ");
    setDescription(" ");
  }

  return (
    <>
      <h2 className="text-2xl">Add Post</h2>
      <form onSubmit={onhandleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          className="border rounded"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          className="border rounded"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <button className="px-4 py-1 border rounded">Save</button>
      </form>
    </>
  );
};

export default AddPost;
