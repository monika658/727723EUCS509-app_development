// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     const storedAuth = localStorage.getItem('isAuthenticated');
//     return storedAuth === 'true';
//   });

//   const [user, setUser] = useState(() => {
//     const storedUser = localStorage.getItem('user');
//     try {
//       return storedUser ? JSON.parse(storedUser) : null;
//     } catch (error) {
//       console.error('Error parsing user data from localStorage:', error);
//       return null;
//     }
//   });

//   const login = (userData) => {
//     setIsAuthenticated(true);
//     setUser(userData);
//     localStorage.setItem('isAuthenticated', 'true');
//     localStorage.setItem('user', JSON.stringify(userData));
//     console.log('User logged in:', userData);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('user');
//     console.log('User logged out');
//   };

//   const updateUserProfile = (updatedData) => {
//     setUser(updatedData);
//     localStorage.setItem('user', JSON.stringify(updatedData));
//     console.log('User profile updated:', updatedData);
//   };

//   useEffect(() => {
//     const authState = localStorage.getItem('isAuthenticated') === 'true';
//     setIsAuthenticated(authState);
//     console.log('Auth state on mount:', authState);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout, updateUserProfile }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// src/Context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    console.log('User logged in');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');
    console.log('User logged out');
  };

  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authState);
    console.log('Auth state on mount:', authState);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};