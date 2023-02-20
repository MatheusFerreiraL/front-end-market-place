import { Typography } from '@mui/material';
import logo from '../../assets/logo.svg';
import ImageBoxStyled from './styles';

export default function Logo({ flexDirection }) {
  return (
    <ImageBoxStyled
      className='logoDiv'
      sx={{ flexDirection: flexDirection || null }}
    >
      <img src={logo} alt='Market Logo' />
      <Typography variant='h4' component='span'>
        Market Cubos
      </Typography>
    </ImageBoxStyled>
  );
}
