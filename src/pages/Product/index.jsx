import AddIcon from '@mui/icons-material/Add';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PixOutlinedIcon from '@mui/icons-material/PixOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CardActionArea } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import {
  // Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import CustomButton from '../../components/Button';
import useUser from '../../hooks/useUser';
import axios from '../../services/api';
import {
  ContainerProductCardMedia,
  CustomCard,
  ProductCardMedia,
} from '../Home/styles';
import {
  ContainerButtons,
  ContainerIcons,
  ContainerQuantity,
  CustomContainer,
  CustomDescriptionContainer,
  CustomProductContainer,
  ProductPicture,
  ShippingAdressField,
} from './styles';

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    setCurrentProduct,
    currentProduct,
    setProductQuantity,
    productQuantity,
    setProducts,
    products,
    suggestedProduct,
    setSuggestedProduct,
  } = useUser();

  const handleGetDetailedProduct = async () => {
    try {
      const { data } = await axios.get(`/product/detailed/${productId}`);
      setCurrentProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetSuggestedProducts = async () => {
    const thisPage = searchParams.get('pageNumber')
      ? parseInt(searchParams.get('pageNumber'), 10)
      : 0;
    const suggestionPage =
      thisPage === 0
        ? thisPage + Math.random() * 2
        : thisPage - Math.random() * 2;
    setSearchParams({
      pageLimit: 4,
      pageNumber: searchParams.get('pageNumber') || thisPage,
    });
    try {
      const { data } = await axios.get(
        `/home?pageLimit=${4}&pageNumber=${suggestionPage}`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickedProduct = product => {
    navigate(`/product/detailed/${product.id}`);
    setSuggestedProduct(!suggestedProduct);
    setProductQuantity(0);
  };

  const handlePlusQuantity = () => {
    if (productQuantity < currentProduct.storage) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleMinusQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleBreadcrumb = event => {
    event.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    handleGetDetailedProduct();
    handleGetSuggestedProducts();
  }, [productQuantity, suggestedProduct]);
  return (
    <CustomContainer>
      {currentProduct && (
        <>
          <div
            role='presentation'
            onClick={handleBreadcrumb}
            className='breadcrumbs'
          >
            <Breadcrumbs separator='>' aria-label='breadcrumb'>
              <Link underline='hover' key='2' color='grey.50' href='/'>
                Home
              </Link>
              <Typography variant='body1' component='span' color='grey.50'>
                {currentProduct.title}
              </Typography>
            </Breadcrumbs>
          </div>
          <CustomProductContainer>
            <div className='wrap-product-container'>
              <ProductPicture
                sx={{ backgroundImage: `url(${currentProduct.imageUrl})` }}
              />
              <div className='product-info'>
                <Typography variant='h4' component='h2' className='title'>
                  {currentProduct.title}
                </Typography>
                <Typography
                  variant='caption'
                  component='span'
                  className='store-selling'
                  color='grey.50'
                >
                  Sell and delivering by |
                  <Typography
                    variant='caption'
                    component='strong'
                    color='primary.main'
                  >
                    {currentProduct.store.name}
                  </Typography>
                </Typography>
                <Typography
                  variant='h3'
                  component='h3'
                  className='price'
                  color='primary.dark'
                >
                  {`${(currentProduct.price / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}`}
                </Typography>
                <Typography variant='h6' component='span' className='payment'>
                  Payment
                </Typography>
                <ContainerIcons>
                  <QrCodeScannerOutlinedIcon />
                  <CreditCardOutlinedIcon />
                  <PixOutlinedIcon />
                </ContainerIcons>
                <Typography variant='h6' component='span' className='payment'>
                  Quantity
                </Typography>
                <ContainerQuantity>
                  <div className='control-quantity'>
                    <CustomButton
                      variant='text'
                      bg='none'
                      bgHover='none'
                      onClickFunc={handlePlusQuantity}
                    >
                      <AddIcon style={{ color: '#B7005C' }} />
                    </CustomButton>
                    <Typography variant='body1' component='span'>
                      {productQuantity}
                    </Typography>
                    <CustomButton
                      variant='text'
                      bg='none'
                      bgHover='none'
                      onClickFunc={handleMinusQuantity}
                    >
                      <RemoveIcon style={{ color: '#B7005C' }} />
                    </CustomButton>
                  </div>
                  <Typography
                    variant='caption'
                    component='span'
                    color='grey.50'
                  >
                    {currentProduct.storage} available
                  </Typography>
                </ContainerQuantity>
                <Typography variant='h6' component='span'>
                  Shipping
                </Typography>
                <div className='shipping'>
                  <ShippingAdressField
                    variant='filled'
                    size='small'
                    placeholder='Digite o CEP'
                    type='tel'
                    autoComplete='off'
                  />
                </div>
                <ContainerButtons>
                  <CustomButton
                    variant='outlined'
                    bg='none'
                    bgHover='none'
                    borderColor='primary.dark'
                    startIcon={
                      <ShoppingCartOutlinedIcon style={{ color: '#B7005C' }} />
                    }
                  >
                    <Typography
                      variant='subtitle1'
                      component='span'
                      color='primary.dark'
                    >
                      Adicionar ao carrinho
                    </Typography>
                  </CustomButton>
                  <CustomButton>
                    <Typography
                      variant='subtitle1'
                      component='span'
                      color='grey.200'
                    >
                      Comprar agora
                    </Typography>
                  </CustomButton>
                </ContainerButtons>
              </div>
            </div>
          </CustomProductContainer>
          <CustomDescriptionContainer>
            <Typography variant='h5' component='h3'>
              Descrição do produto
            </Typography>
            <Typography variant='subtitle1'>
              {currentProduct.description}
            </Typography>
          </CustomDescriptionContainer>
        </>
      )}
      <Typography variant='h5' className='suggested-products-title'>
        Outros produtos
      </Typography>
      <ContainerProductCardMedia
        className='container-product-card'
        sx={{ margin: 0, flexWrap: 'nowrap' }}
      >
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
                    alt={`Product Image ${product.title}`}
                    sx={{ marginRight: 20 }}
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
    </CustomContainer>
  );
}
