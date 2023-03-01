import { useState } from 'react';

export default function useUserProvider() {
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [products, setProducts] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [myProducts, setMyProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState();
  const [page, setPage] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

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
    myProducts,
    setMyProducts,
    currentProduct,
    setCurrentProduct,
    page,
    setPage,
    productQuantity,
    setProductQuantity,
  };
}
