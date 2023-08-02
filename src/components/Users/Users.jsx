import React from 'react';
import UserCard from '../UserCard.jsx/UserCard';
import './Users.css';

function Users({ users = [], setUsers }) {
  return (
    <div className="container-cards">
      {users?.map((user) => (
        <UserCard
          key={user.id}
          imageUrl={user.avatar_url}
          login={user.login}
          repos={user.repos}
        />
      ))}
    </div>
  );
}

export default Users;
