import React from 'react';
import useFetch from "react-fetch-hook";
import UserInterface from '../../types/UserInterface';
import UserTile from '../UserTile';
import './UsersList.css';

const UsersList: React.FC = () => {
  const { isLoading, data: users } = useFetch<UserInterface[]>("https://api.github.com/users");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="users-list">
      {users?.map((user) => <UserTile data={user} key={user.id}/>)}
    </ul>
  );
}

export default UsersList;