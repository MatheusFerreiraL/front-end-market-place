import { createContext } from 'react';
import useUserProvider from '../hooks/useUserProvider';

const UserContext = createContext({});

function UserProvider({ children }) {
  const values = useUserProvider();

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
