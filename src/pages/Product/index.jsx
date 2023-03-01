import AddIcon from '@mui/icons-material/Add';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PixOutlinedIcon from '@mui/icons-material/PixOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomButton from '../../components/Button';
import useUser from '../../hooks/useUser';
import axios from '../../services/api';
import {
  ContainerIcons,
  ContainerQuantity,
  CustomContainer,
  CustomProductContainer,
  ProductPicture,
  ShippingAdressField,
  ContainerButtons,
} from './styles';

export default function Product() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    setCurrentProduct,
    currentProduct,
    setProductQuantity,
    productQuantity,
  } = useUser();

  const handleGetDetailedProduct = async () => {
    try {
      const { data } = await axios.get(`/product/detailed/${productId}`);
      setCurrentProduct(data);
      console.log(currentProduct);
    } catch (error) {
      console.log(error);
    }
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
  }, [productQuantity]);
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
                  />
                </div>
                <ContainerButtons>
                  <CustomButton>primeiro</CustomButton>
                  <CustomButton>segundo</CustomButton>
                </ContainerButtons>
              </div>
            </div>
          </CustomProductContainer>
        </>
      )}
    </CustomContainer>
  );
}
