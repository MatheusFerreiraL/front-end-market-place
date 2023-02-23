/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Box from '../../components/Box';
import CustomButton from '../../components/Button';
import CenterBox from '../../components/CenterBox';
import Logo from '../../components/Logo';
import loginSchema from '../../schemas/loginSchema';
import {
  ContainerButton,
  ContainerInput,
  ContainerWelcome,
  FormBox,
} from '../../styles/styles';

export default function Login() {
  const { navigate } = useNavigate(); //  será usado para quando o usuário fizer login, ele será redirecionado para a página de produtos
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = data => {
    // aqui faremos de fato a requisição para o backend
    navigate();
    console.log(data);
  };
  return (
    <Box>
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
