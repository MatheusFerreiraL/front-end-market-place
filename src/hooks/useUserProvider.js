import { useState } from 'react';

export default function useUserProvider() {
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [products, setProducts] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  return {
    storeName,
    setStoreName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    products,
    setProducts,
    currentUser,
    setCurrentUser,
  };
}
