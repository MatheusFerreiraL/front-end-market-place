/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Box from '../../components/Box';
import CustomButton from '../../components/Button';
import CenterBox from '../../components/CenterBox';
import Logo from '../../components/Logo';
import registerSchema from '../../schemas/registerSchema';
import { ContainerButton, ContainerInput, FormBox } from '../../styles/styles';
import ContainerRegister from './styles';

export default function Register() {
  const { navigate } = useNavigate(); // será usado para quando o usuário fizer login, ele será redirecionado para a página de produtos

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmitFunction = data => {
    // aqui faremos de fato a requisição para o backend
    navigate();
    console.log(data);
  };

  return (
    <Box>
      <CenterBox>
        <FormBox onSubmit={handleSubmit(onSubmitFunction)} component='form'>
          <Logo flexDirection='column' />
          <ContainerRegister>
            <Typography variant='h6' component='h6' color='primary.light'>
              Cadastre-se
            </Typography>
          </ContainerRegister>
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
          <ContainerButton>
            <Typography variant='body1' component='span'>
              Ao criar uma conta, você concorda com a nossa{' '}
              <Link className='redirect-link' to='#'>
                Política de Privacidade
              </Link>{' '}
              e{' '}
              <Link className='redirect-link' to='#'>
                Termos de serviço
              </Link>
            </Typography>
            <CustomButton btnType='submit'>
              <Typography variant='button' noWrap>
                Criar conta
              </Typography>
            </CustomButton>
            <Typography variant='body1' component='span'>
              Já tem uma conta?
              <Link className='redirect-link' to='/login'>
                Fazer login
              </Link>
            </Typography>
          </ContainerButton>
        </FormBox>
      </CenterBox>
    </Box>
  );
}
