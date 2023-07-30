import React from 'react';
import UserCard from '../UserCard.jsx/UserCard';
import './Users.css';

function Users({ users = [] }) {
  return (
    <div className="container-cards">
      {users?.map((user) => (
        <UserCard
          key={user.id}
          imageUrl={user.avatar_url}
          login={user.login}
          reposurl={user.repos_url}
        />
      ))}
    </div>
  );
}

export default Users;
