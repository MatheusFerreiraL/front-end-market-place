import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import ImageBoxStyled from './styles';

export default function Logo({ flexDirection }) {
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate('/');
  };
  return (
    <ImageBoxStyled
      className='logoDiv'
      sx={{ flexDirection: flexDirection || null }}
      onClick={handleRedirectToHome}
    >
      <img src={logo} alt='Market Logo' />
      <Typography
        variant='h4'
        component='span'
        onClick={handleRedirectToHome}
        sx={{ cursor: 'pointer' }}
      >
        Market Cubos
      </Typography>
    </ImageBoxStyled>
  );
}
