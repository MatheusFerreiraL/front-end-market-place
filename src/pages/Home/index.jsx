import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Box from '../../components/Box';
import CustomButton from '../../components/Button';
import useUser from '../../hooks/useUser';
import axios from '../../services/api';
import {
  ContainerProductCardMedia,
  CustomCard,
  ProductCardMedia,
  ContainerPagination,
  PageDisplay,
} from './styles';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setProducts, products, page, setPage } = useUser();
  const navigate = useNavigate();

  const handleGetProducts = async () => {
    const thisPage = searchParams.get('pageNumber')
      ? parseInt(searchParams.get('pageNumber'), 10)
      : 0;
    setPage(thisPage);
    setSearchParams({
      pageLimit: 8,
      pageNumber: searchParams.get('pageNumber') || thisPage,
    });
    try {
      const { data } = await axios.get(
        `/home?pageLimit=${searchParams.get('pageLimit') || 8}&pageNumber=${
          searchParams.get('pageNumber') || thisPage
        }`
      );
      setProducts(data);
    } catch (error) {
      /* 
        CRIAR LÓGICA PARA, QUANDO FOR PARA UMA ṔAGINA QUE NÃO TEM MAIS PRODUTOS, IR PARA PÁGINA DE ERRO?
      */
      console.log(error);
    }
  };

  const handleClickedProduct = product => {
    navigate(`product/detailed/${product.id}`);
  };

  /* FAZER VALIDAÇÃO PARA:
    -> CLICAR PARA VOLTAR NA PRIMEIRA PÁGINA : IR PARA ÚLTIMA PÁGINA;
    -> CLICAR PARA AVANÇAR NA ÚLTIMA PÁGINA: IR PARA PRIMEIRA PÁGINA;
  */

  const handleNextPage = () => {
    setSearchParams({
      pageLimit: 8,
      pageNumber: parseInt(searchParams.get('pageNumber'), 10) + 1 || page + 1,
    });
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page === 0) {
      return;
    }
    setSearchParams({
      pageLimit: 8,
      pageNumber: parseInt(searchParams.get('pageNumber'), 10) - 1 || page - 1,
    });
    setPage(page - 1);
  };

  useEffect(() => {
    handleGetProducts();
  }, [page]);

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
                onClick={() => handleClickedProduct(product)}
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
                    <Typography variant='body2' color='secondary.dark'>
                      {product.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='div'
                      color='secondary.light'
                    >
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
      <ContainerPagination>
        <CustomButton onClickFunc={handlePreviousPage} bg='none' bgHover='none'>
          <ArrowBackIosOutlinedIcon />
        </CustomButton>
        <PageDisplay className='display-page' id='page-display'>
          <Typography variant='h6' color='secondary.dark'>
            {page + 1}
          </Typography>
        </PageDisplay>
        <CustomButton onClickFunc={handleNextPage} bg='none' bgHover='none'>
          <ArrowForwardIosOutlinedIcon />
        </CustomButton>
      </ContainerPagination>
    </Box>
  );
}
