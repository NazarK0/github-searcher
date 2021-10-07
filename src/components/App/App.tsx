import React from 'react';
import './App.css';
import UsersList from '../UsersList';
import SearchUsersBar from '../SearchUsersBar';

const App: React.FC = () => {
  return (
    <>
      <h1>GitHub Searcher</h1>
      <SearchUsersBar/>
      <UsersList/>
    </>
  );
}

export default App;
