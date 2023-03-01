import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useUser from '../../hooks/useUser';
import axios from '../../services/api';
import { getItem } from '../../utils/storage';
import CustomButton from '../Button';
import Logo from '../Logo';
import { ContainerIcons, HeaderStyled } from './styles';

export default function Header({ variation }) {
  const navigate = useNavigate();
  const { setCurrentUser, currentUser, page } = useUser();
  const [isAuth, setIsAuth] = useState(false);

  const handleUserLogged = async () => {
    const token = getItem('token');
    if (token) setIsAuth(true);
    try {
      if (isAuth) {
        const { data } = await axios.get('/store', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCurrentUser(data);
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleMyProducts = () => {
    navigate('/myProducts');
  };

  const handleSell = () => {
    navigate('/sell');
  };

  const handleClickUser = () => {
    return isAuth ? navigate('/') : navigate('/login');
  };

  const handleVariation = () => {
    navigate(-1);
  };

  useEffect(() => {
    handleUserLogged();
  }, [page, isAuth]);
  return (
    <>
      <HeaderStyled>
        {variation && (
          <CustomButton
            variant='text'
            bg='none'
            bgHover='none'
            onClickFunc={handleVariation}
          >
            <ArrowBackIosOutlinedIcon />
          </CustomButton>
        )}
        <Logo />
        <ContainerIcons>
          <CustomButton
            variant='text'
            bg='none'
            bgHover='none'
            btnClassName={variation && 'hidden'}
          >
            <ShoppingCartOutlinedIcon />
            <Typography>My bag</Typography>
          </CustomButton>
          <CustomButton
            variant='text'
            bg='none'
            bgHover='none'
            onClickFunc={handleMyProducts}
            btnClassName={variation && 'hidden'}
          >
            <StorefrontOutlinedIcon />
            <Typography>My products</Typography>
          </CustomButton>
          <CustomButton
            variant='text'
            bg='none'
            bgHover='none'
            onClickFunc={handleClickUser}
          >
            <AccountCircleOutlinedIcon />
            <Typography>{(isAuth && currentUser?.name) || 'Login'}</Typography>
          </CustomButton>
          <CustomButton
            variant='contained'
            onClickFunc={handleSell}
            btnClassName={variation && 'hidden'}
          >
            <AttachMoneyOutlinedIcon fontSize='large' color='grey.200' />
            <Typography variant='h6' component='span' color='grey.200'>
              Want to sell
            </Typography>
          </CustomButton>
        </ContainerIcons>
      </HeaderStyled>
      <Outlet />
      <ToastContainer />
    </>
  );
}
