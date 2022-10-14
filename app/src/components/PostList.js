import React, { useState,useEffect } from 'react'
import axios from 'axios';

function PostList() {
    const [posts,setPosts] = useState([]);

    // fetch data from /posts endpoint
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                let data = response.data;
                // update state
                setPosts(data);
                
            })
    },[])

  return (
    <div>
        <h3>List of Posts</h3>
        {
            posts.map(post => {
               return (<div className='posts' id={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
               </div>)
            })
        }
    </div>
  )
}

export default PostList