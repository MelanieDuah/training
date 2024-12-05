import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserContext';

const PageMenu: React.FC = () => {
  const { id } = useUserContext();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {id === 0 && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default PageMenu;
