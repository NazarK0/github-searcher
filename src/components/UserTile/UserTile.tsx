import React from 'react';
import UserInterface from '../../types/UserInterface';
import useFetch from "react-fetch-hook";
import './UserTile.css';

type UserTileProps = {
  data: UserInterface;
  key: any;
};

const UserTile: React.FC<UserTileProps> = ({ data: user }) => {
  const { isLoading, data: repos } = useFetch<any[]>(`https://api.github.com/users/${user.login}/repos`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <li className="card horizontal" title={user.login}>
      <div className="card-image">
        <img src={user.avatar_url} alt={user.login} height="220" width="220"/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h3>{user.login}</h3>
        </div>
        <div className="card-action">
          <p>
            <span>Repo:</span>
            <span>{repos?.length}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default UserTile;