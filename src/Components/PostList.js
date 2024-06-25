// src/components/PostList.js
import React, { useContext } from 'react';
import { PostContext } from '../Context/PostContext';
import Post from './Post';

function PostList() {
  const { posts } = useContext(PostContext);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
