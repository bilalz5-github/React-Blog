import React, { useContext } from 'react';
import { PostContext } from '../Context/PostContext';

function Post({ post }) {
  const { deletePost } = useContext(PostContext);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
}

export default Post;
