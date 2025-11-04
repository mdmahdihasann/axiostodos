import React, { useEffect, useState } from 'react'

const EditPost = ({editpost, onEditPost}) => {
  const [title, setTitle] = useState(editpost.title);
    const [desc, setDescription] = useState(editpost.desc);
    function onhandleSubmit(e) {
      e.preventDefault();
      const inputData = {
        id: editpost.id,
        title,
        desc,
      };
      onEditPost(inputData);
  
      setTitle("");
      setDescription("");
    }
    useEffect(()=>{
      setTitle(editpost.title),
      setDescription(editpost.desc)
    },[editpost])
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
        value={title}
      />
      <br />
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <input
        type="text"
        className="border rounded"
        name="desc"
        onChange={(e) => setDescription(e.target.value)}
        value={desc}
      />
      <br />
      <br />
      <button type='submit' className="px-4 py-1 border rounded">update</button>
    </form>
    </>
  )
}

export default EditPost