import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CustomButton from '../../components/Button';
import useUser from '../../hooks/useUser';
import axios from '../../services/api';
import { getItem } from '../../utils/storage';
import {
  TableBoxContainer,
  TableCell,
  TableHeader,
  TableRow,
  TopTableBox,
} from './styles';
import NoProducts from '../../components/NoProducts';

export default function MyProducts() {
  const { setMyProducts, myProducts, suggestedProduct, setSuggestedProduct } =
    useUser();
  const navigate = useNavigate();

  const handleGetMyProducts = async () => {
    try {
      const token = getItem('token');

      const { data } = await axios.get('/myproducts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data, myProducts);
      setMyProducts(data);
      console.log('my producst', data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClickedProduct = thisProduct => {
    navigate(`/product/detailed/${thisProduct.id}`);
    setSuggestedProduct(!suggestedProduct);
  };

  useEffect(() => {
    handleGetMyProducts();
  }, [suggestedProduct]);

  return (
    <TableBoxContainer>
      <TopTableBox>
        <Typography variant='h5'>Meus Produtos</Typography>
        <CustomButton startIcon={<AddIcon style={{ color: '#ffffff' }} />}>
          <Typography color='grey.200'>Criar anúncio</Typography>
        </CustomButton>
      </TopTableBox>
      <TableHeader>
        <Typography
          variant='h6'
          color='grey.50'
          sx={{ marginLeft: 20, width: 514 }}
        >
          Name
        </Typography>
        <Typography variant='h6' color='grey.50' sx={{ width: 150 }}>
          Storage
        </Typography>
        <Typography variant='h6' color='grey.50' sx={{ width: 128 }}>
          Sold
        </Typography>
        <Typography variant='h6' color='grey.50' sx={{ width: 300 }}>
          Price
        </Typography>
      </TableHeader>
      {myProducts.length > 0 ? (
        myProducts.map(thisProduct => {
          return (
            <TableRow key={thisProduct.id}>
              <TableCell
                className='img-cell'
                onClick={() => handleClickedProduct(thisProduct)}
              >
                <img
                  src={`${thisProduct.imageUrl}`}
                  alt={`${thisProduct.title}`}
                />
              </TableCell>
              <TableCell className='name-cell'>
                <Typography>{thisProduct.title}</Typography>
              </TableCell>
              <TableCell className='storage-cell'>
                <Typography>{thisProduct.storage}</Typography>
              </TableCell>
              <TableCell className='sold-cell'>
                <Typography>{Math.floor(Math.random() * 1000 + 1)}</Typography>
              </TableCell>
              <TableCell className='price-cell'>
                <Typography>{`${(thisProduct.price / 100).toLocaleString(
                  'pt-BR',
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }
                )}`}</Typography>
              </TableCell>
              <TableCell className='icons-btn'>
                <EditOutlinedIcon sx={{ cursor: 'pointer' }} />
                <DeleteForeverOutlinedIcon sx={{ cursor: 'pointer' }} />
              </TableCell>
            </TableRow>
          );
        })
      ) : (
        <NoProducts />
      )}
      <ToastContainer />
    </TableBoxContainer>
  );
}
