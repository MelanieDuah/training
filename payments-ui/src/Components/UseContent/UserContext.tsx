import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the User type
interface User {
  id: number;
  name: string;
  role: string;
}

// Define the context shape
interface UserContextType extends User {
  login: (id: number, name: string, role: string) => void;
  logout: () => void;
}

// Create UserContext with default values
const UserContext = createContext<UserContextType>({
  id: 0,
  name: '',
  role: '',
  login: () => {},
  logout: () => {},
});

// Custom hook for easier access
export const useUserContext = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ id: 0, name: '', role: '' });

  const login = (id: number, name: string, role: string) => {
    setUser({ id, name, role });
  };

  const logout = () => {
    setUser({ id: 0, name: '', role: '' });
  };

  return (
    <UserContext.Provider value={{ ...user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
