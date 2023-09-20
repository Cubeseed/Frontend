// import { createContext } from 'react';

// const UserContext = createContext({
//   usernameContext: null,
//   passwordContext: null,
//   userIdContext:null,
//   setUsernameContext: () => {},
//   setPasswordContext: () => {},
//   setUserIdContext: () => {}
// });

// export default UserContext;

// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [usernameContext, setUsernameContext] = useState(null);
  const [passwordContext, setPasswordContext] = useState(null);
  const [userIdContext, setUserIdContext] = useState(null);

  const value = {
    usernameContext,
    setUsernameContext,
    passwordContext,
    setPasswordContext,
    userIdContext,
    setUserIdContext,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
