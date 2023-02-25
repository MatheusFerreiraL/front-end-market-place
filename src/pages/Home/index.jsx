import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import Box from '../../components/Box';
import axios from '../../services/api';
import { getItem } from '../../utils/storage';
import {
  ContainerProductCardMedia,
  ProductCardMedia,
  CustomCard,
} from './styles';
import useUser from '../../hooks/useUser';

export default function Home() {
  const { setProducts, products } = useUser();

  const handleGetProducts = async () => {
    try {
      const token = getItem('token');

      const { data } = await axios.get('/home', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <Box>
      <ContainerProductCardMedia className='container-product-card'>
        {products &&
          products.map(product => {
            return (
              <CustomCard
                sx={{ width: 382 }}
                key={product.id}
                className='product-card-media'
              >
                <CardActionArea>
                  <ProductCardMedia
                    component='img'
                    id={product.id}
                    height='342'
                    image={`${product.imageUrl}`}
                    alt={`Product Image ${product.name}`}
                  />
                  <CardContent>
                    <Typography variant='body2' color='text.secondary'>
                      {product.title}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='div'>
                      {`${(product.price / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </CustomCard>
            );
          })}
      </ContainerProductCardMedia>
    </Box>
  );
}
