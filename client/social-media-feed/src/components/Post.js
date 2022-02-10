import React from 'react';
import Card from 'react-bootstrap/Card'


function Post(props) {
  return (
    <div id="post">
      <Card bg={'light'} style={{width:'560px'}}>
        <Card.Header style={{ fontWeight: 'bold', fontSize:'26px'}}>{props.username}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.content}
          </Card.Text>
          <Card.Subtitle style={{ fontWeight: '200', fontStyle: 'normal'}}>{props.timestamp}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post;