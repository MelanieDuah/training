import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

const Login: React.FC = () => {
  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(1, 'John Doe', 'Admin'); // Set user details
    navigate('/'); // Redirect to home/profile page
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
