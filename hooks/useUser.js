import { useContext } from 'react';
import { UserContext } from '../src/contexts/userProvider';

export default function useUser() {
  return useContext(UserContext);
}