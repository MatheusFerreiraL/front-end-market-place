import { createContext } from 'react';
import useUserProvider from '../../hooks/useUserProvider';

const UserContext = createContext();

function UserProvider({ props }) {
  const userProvider = useUserProvider();

  return (
    <UserContext.Provider value={userProvider}>{props}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
