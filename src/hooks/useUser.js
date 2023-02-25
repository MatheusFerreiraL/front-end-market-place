import { useContext } from 'react';
import { UserContext } from '../contexts/userProvider';

export default function useUser() {
  return useContext(UserContext);
}
