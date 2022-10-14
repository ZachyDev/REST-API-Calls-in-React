import React, { useState,useEffect } from 'react'
import axios from 'axios';

function PostList() {
    const [posts,setPosts] = useState([]);

    // fetch data from /posts endpoint
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                // update state
                setPosts(() => {
                    posts = response.data;
                })
            })
    })

  return (
    <div>PostList</div>
  )
}

export default PostList