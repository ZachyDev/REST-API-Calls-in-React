import React, {useState,useEffect} from 'react'
import axios from 'axios';

function PostList() {
    const [posts,setPosts] = useState([]);

    // useEffect hook to fetch data
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let data = response.data;
                // update state
                setPosts(data);
            })
    },[])
  return (
    <div>
        <h4>List of Posts</h4>
        { posts.map(post => {
            return(
                <div className='posts' key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        })}
    </div>
  )
}

export default PostList