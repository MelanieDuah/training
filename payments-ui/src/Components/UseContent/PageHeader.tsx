import React from 'react';
import { useUserContext } from './UserContext';

const PageHeader: React.FC = () => {
  const { id, name, logout } = useUserContext();

  return (
    <header>
      {id !== 0 ? (
        <div>
          <span>Welcome, {name}!</span>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div>
          <span>Welcome, Guest!</span>
        </div>
      )}
    </header>
  );
};

export default PageHeader;
