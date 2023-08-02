/* eslint-disable react/prop-types */
import React, { useState, useEffect, useMemo } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserCard({
  imageUrl, login, repos,
}) {
  const [showInfoUser, setShowInfoUser] = useState(false);
  return (
    <div className="user-card">
      <Card style={{ width: '18rem', margin: '15px' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title><a style={{ color: 'rgb(92,99,106)' }} target="blank" href={`https://github.com/${login}`} className="btnstretched-link">{login}</a></Card.Title>
          {showInfoUser
          && (
          <Card.Text>
            {`Количество репозиториев: ${repos?.length}`}
          </Card.Text>
          )}
          <Button onClick={() => setShowInfoUser(!showInfoUser)} variant="secondary">{showInfoUser ? 'Скрыть информацию' : 'Показать информацию'}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
