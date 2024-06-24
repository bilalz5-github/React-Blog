// src/pages/AddPost.js
import React, { useState, useContext } from 'react';
import { PostContext } from '../context/PostContext';

function AddPost() {
  const { addPost } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </label>
      <button type="submit">Add Post</button>
    </form>
  );
}

export default AddPost;
