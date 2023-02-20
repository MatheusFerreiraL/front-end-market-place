/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useForm } from 'react-hook-form';
import Box from '../../components/Box';
import CustomButton from '../../components/Button';
import CenterBox from '../../components/CenterBox';
import Logo from '../../components/Logo';
import { registerSchema } from '../../schemas/registerSchema';
import { ContainerInput, FormBox } from './styles';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmitFunction = data => {
    // aqui faremos de fato a requisição para o backend
    console.log(data);
  };

  return (
    <Box>
      <CenterBox>
        <FormBox onSubmit={handleSubmit(onSubmitFunction)} component='form'>
          <Logo flexDirection='column' />
          <Container
            className='container-register'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <Typography variant='h6' component='h6'>
              Cadastre-se
            </Typography>
          </Container>
          <ContainerInput>
            <TextField
              id='storeName'
              label='Store name'
              variant='outlined'
              placeholder='Insert the store name'
              autoComplete='off'
              {...register('storeName')}
              helperText={errors.storeName?.message}
            />
            <TextField
              id='email'
              label='E-mail'
              variant='outlined'
              placeholder='exemplo@email.com'
              autoComplete='off'
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
              {...register('password')}
              helperText={errors.password?.message}
            />
            <TextField
              id='confirmPassword'
              label='Confirm password'
              variant='outlined'
              placeholder='Confirm your password'
              autoComplete='off'
              type='password'
              {...register('confirmPassword')}
              helperText={errors.confirmPassword?.message}
            />
          </ContainerInput>
          <Container
            className='container-button'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Typography variant='body1' component='span'>
              Ao criar uma conta, você concorda com a nossa{' '}
              <a className='redirect-link' href='#'>
                Política de Privacidade
              </a>{' '}
              e{' '}
              <a className='redirect-link' href='#'>
                Termos de serviço
              </a>
            </Typography>
            <CustomButton btnType='submit'>
              <Typography variant='button' noWrap>
                Criar conta
              </Typography>
            </CustomButton>
            <Typography variant='body1' component='span'>
              Já tem uma conta?{' '}
              <a className='redirect-link' href='/login'>
                Fazer login
              </a>
            </Typography>
          </Container>
        </FormBox>
      </CenterBox>
    </Box>
  );
}
