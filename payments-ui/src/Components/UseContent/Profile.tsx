import React from 'react';
import { useUserContext } from './UserContext';

const Profile: React.FC = () => {
  const { id, name, role } = useUserContext();

  return (
    <div>
      <h1>Home / Profile Page</h1>
      {id !== 0 ? (
        <div>
          <p>Welcome, {name}!</p>
          <p>Your role: {role}</p>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;
