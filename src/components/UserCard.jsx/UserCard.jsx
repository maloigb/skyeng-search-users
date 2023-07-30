/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserCard({ imageurl, login }) {
  return (
    <div className="user-card">
      <Card style={{ width: '18rem', margin: '15px' }}>
        <Card.Img variant="top" src={imageurl} />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Информация о пользователе</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
