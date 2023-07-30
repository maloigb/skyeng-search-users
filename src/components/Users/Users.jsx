import React from 'react';
import UserCard from '../UserCard.jsx/UserCard';
import './Users.css';

// eslint-disable-next-line react/prop-types
function Users({ users = [] }) {
  return (
    <div className="container-cards">
      {users?.map((user) => (
        <UserCard imageurl={user.avatar_url} login={user.login} reposurl={user.repos_url} />
      ))}
    </div>
  );
}

export default Users;
