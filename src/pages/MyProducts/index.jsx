import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import useUser from '../../hooks/useUser';
import axios from '../../services/api';
import { getItem } from '../../utils/storage';

export default function MyProducts() {
  const { setMyProducts } = useUser();

  const handleGetMyProducts = async () => {
    try {
      const token = getItem('token');

      const { data } = await axios.get('/myproducts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyProducts(data);
      console.log('my producst', data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetMyProducts();
  }, []);

  return (
    <div>
      <h1>DENTRO DA PÁGINA DE MEUS PRODUTOS</h1>
      <ToastContainer />
    </div>
  );
}
