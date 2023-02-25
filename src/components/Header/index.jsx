import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import CustomButton from '../Button';
import Logo from '../Logo';
import { ContainerIcons, HeaderStyled } from './styles';

export default function Header() {
  const { currentUser } = useUser();
  return (
    <>
      <HeaderStyled>
        <Logo />
        <ContainerIcons>
          <CustomButton variant='text' bg='none'>
            <ShoppingCartOutlinedIcon />
            <Typography>My bag</Typography>
          </CustomButton>
          <CustomButton variant='text' bg='none'>
            <StorefrontOutlinedIcon />
            <Typography>My products</Typography>
          </CustomButton>
          <CustomButton variant='text' bg='none'>
            <AccountCircleOutlinedIcon />
            <Typography>{currentUser.name || 'Login'}</Typography>
          </CustomButton>
          <CustomButton variant='contained'>
            <AttachMoneyOutlinedIcon fontSize='large' color='grey.200' />
            <Typography variant='h6' component='span' color='grey.200'>
              Want to sell
            </Typography>
          </CustomButton>
        </ContainerIcons>
      </HeaderStyled>
      <Outlet />
    </>
  );
}
