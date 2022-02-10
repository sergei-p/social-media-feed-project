import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setModalState] = useState([]);
  const [modalClosed, setModalClosed] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
    .then((response) => {
      const parsedPosts = response.data.map((postData) => {return JSON.parse(postData)})
      setPosts(parsedPosts); 
    })
    .catch((err) => {
      console.log(err)
    })

    setModalState(false);
    setModalClosed(false)
  }, [modalClosed]);

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
    setModalClosed(true)
  }


  const displayPosts = (
    posts.map((post) => (
      <div key={post.id}>
        <Post
        title={post.title} 
        username={post.username} 
        content={post.content}
        timestamp={post.timestamp}
        id={post.id}
        />
      </div>
    ))

  )

  return (
    <section className="feed">
      <nav id="navbar">
        <div id="currentUser">
          <h4>Jack Random</h4>
        </div>
        <div id="siteTitle">
          <h2>Social Media Feed</h2>
        </div>
        <div id="createPostButton">
        <Button variant="primary" onClick={openModal}>Create Post</Button>
        </div>
      </nav>
      <div id="posts">
        { displayPosts }
      </div>

      { isOpen ?
        <ModalForm 
          closeModal={closeModal}
          isOpen={isOpen}
          />
          :
          null
      }
      
    </section>
  )
}

export default Feed;