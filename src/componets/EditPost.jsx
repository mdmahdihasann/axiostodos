import React, { useState } from 'react'

const EditPost = ({editpost, onEditPost}) => {
  const [title, setTitle] = useState(editpost.title);
    const [description, setDescription] = useState(editpost.description);
    function onhandleSubmit(e) {
      e.preventDefault();
      const inputData = {
        title,
        description,
      };
      onEditPost(inputData);
  
      setTitle(" ");
      setDescription(" ");
    }
  return (
    <>
    <h2 className="text-2xl">Edit Post</h2>
    <form onSubmit={onhandleSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        className="border rounded"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        defaultValue={title}
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
        defaultValue={description}
      />
      <br />
      <br />
      <button className="px-4 py-1 border rounded">Save</button>
    </form>
    </>
  )
}

export default EditPost