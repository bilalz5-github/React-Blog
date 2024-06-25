import React, { useState, useContext } from 'react';
import { PostContext } from '../Context/PostContext';

function AddPost() {
  const { addPost } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addPost(title, content);
      setTitle('');
      setContent('');
    } else {
      alert('Please enter both a title and content.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </label>
      <br />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default AddPost;
