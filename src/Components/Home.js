import React, {useContext} from "react";
import {PostContext} from '../context/PostContext';

function Post({post}){

    const{ deletePost } = useContext(PostContext);

    return(

        <div>
            <h2>{post.title}</h2>
            <P>{post.content}</P>
            <button onClick={() => deletePost(post.id)} >Delete</button>
        </div>
    );


}

export default Home