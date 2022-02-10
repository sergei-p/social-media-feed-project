import React, { useEffect, useState } from 'react';
import axios from 'axios';
import timestamp from 'time-stamp';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/button'


function ModalForm(props) {
  const [username, setUserName] = useState([]);
  const [postTitle, setPostTitle] = useState([]);
  const [postText, setPostText] = useState([]);

  useEffect(() => {
    setUserName("")
    setPostTitle("")
    setPostText("")
  },[])

  const handleUserNameChange = (e) => setUserName(e.target.value)
 
  const handlePostTitleChange = (e) => setPostTitle(e.target.value)
  const handlePostTextChange = (e) => setPostText(e.target.value)

  const submitPostToDb = () => {
    
    const time = timestamp.utc('MM/DD/YY HH:mm')
    const data = {"title": postTitle, "username": username, "content": postText, 'timestamp': time}

    axios.post('/api/posts', data)
    .then((response) => {
      // console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
    
    props.closeModal()
  } 

  return(
    <Modal 
        show={props.isOpen} 
        onHide={props.closeModal}
        style={{ marginTop: '100px'}}
      >
      <Modal.Header closeButton>
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form.Group >
              <Form.Label>Username: </Form.Label>
              <Form.Control type="text" onChange={handleUserNameChange}/>           
          </Form.Group>

          <Form.Group >
              <Form.Label>Post Title: </Form.Label>
              <Form.Control type="text" onChange={handlePostTitleChange}/>           
          </Form.Group>

          <Form.Group >
              <Form.Label>Post: </Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handlePostTextChange}/>           
          </Form.Group>


      </Modal.Body>
      <Modal.Footer>
          <Button variant="primary" type="submit" onClick={submitPostToDb}>
              Submit
          </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalForm;