/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Box from '../../components/Box';
import CustomButton from '../../components/Button';
import CenterBox from '../../components/CenterBox';
import Logo from '../../components/Logo';
import loginSchema from '../../schemas/loginSchema';
import axios from '../../services/api';
import {
  ContainerButton,
  ContainerInput,
  ContainerWelcome,
  FormBox,
} from '../../styles/styles';
import { setItem } from '../../utils/storage';

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = async data => {
    try {
      const info = await axios.post('/login', {
        email: data.email,
        password: data.password,
      });
      setItem('token', info.data.token);
      toast.success(`Hey, ${info.data.user.name}! Nice to have you back!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate('/home');
      }, 2500);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <Box>
      <ToastContainer />
      <CenterBox>
        <FormBox
          onSubmit={handleSubmit(onSubmitFunction)}
          component='form'
          sx={{ minHeight: '577px' }}
        >
          <Logo flexDirection='column' />
          <ContainerWelcome>
            <Typography variant='h6' component='h6' color='primary.light'>
              Boas Vindas!
            </Typography>
            <Typography
              variant='caption'
              component='span'
              color='secondary.dark'
            >
              Use seu email e senha para acessar a conta
            </Typography>
          </ContainerWelcome>
          <ContainerInput>
            <TextField
              id='email'
              label='E-mail'
              variant='outlined'
              placeholder='exemplo@email.com'
              autoComplete='off'
              fullWidth
              {...register('email')}
              helperText={errors.email?.message}
            />
            <TextField
              id='password'
              label='Password'
              variant='outlined'
              placeholder='Insert your password'
              autoComplete='off'
              type='password'
              fullWidth
              {...register('password')}
              helperText={errors.password?.message}
            />
          </ContainerInput>
          <ContainerButton>
            <CustomButton btnType='submit'>
              <Typography variant='button' noWrap>
                Fazer Login
              </Typography>
            </CustomButton>
            <Typography variant='body1' component='span'>
              Não possui conta ?
              <Link className='redirect-link' to='/register'>
                Cadastrar-se
              </Link>
            </Typography>
          </ContainerButton>
        </FormBox>
      </CenterBox>
    </Box>
  );
}
