import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function PostForm() {
    const [form,setForm] = useState('');
    const [initialForm,setInitialForm] = useState([{}]);

    // handle ID change 
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    // handleSubmit
    const handleSubmit = e => {
        e.preventDefault();
        
        // send POST request
        axios.post('https://jsonplaceholder.typicode.com/posts', form)
            .then(response => console.log(response))
    }
        
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Post Form</h4>
      <Form>
      <Form.Group>
          <Form.Label>Post ID:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter post Id..." 
                        name='postId'
                        value={form.postId}
                        onChange={handleChange}
                        />
        </Form.Group>
        <Form.Group>
          <Form.Label>Post Title:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter post title..."
                        name='postTitle'
                        value={form.postTitle}
                        onChange={handleChange}
                        />
        </Form.Group>
        <Form.Group>
          <Form.Label>Post Body:</Form.Label>
          <Form.Control type="text" placeholder="Enter post body..." 
            name='postBody'
            value={form.postBody}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{
            "margin": "20px"
        }} onClick={handleSubmit}>
           Submit
        </Button>
      </Form>
    </div>
  )
}

export default PostForm