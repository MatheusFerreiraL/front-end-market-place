/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import newProdSchema from '../../schemas/newProdSchema';
import axios from '../../services/api';
import { getItem } from '../../utils/storage';
import CustomButton from '../Button';
import CenterBox from '../CenterBox';
import { ButtonContainer, FormContainer, MainContainer } from './styles';

export default function ProductForm() {
  // const [file, setFile] = useState();
  const [image, setImage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newProdSchema),
  });

  const onSubmitFunction = async data => {
    const token = getItem('token');
    /* const formData = {
      category: data.category,
      title: data.title,
      description: data.description,
      price: data.price,
      storage: data.storage,
      archive: data.archive[0],
    }; */
    console.log(data);
    try {
      const response = await axios.post('/product', image, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = e => {
    const photo = e.target.files[0];
    if (!photo) return;

    const formData = new FormData();
    setImage(formData.append('archive', photo));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitFunction)} component='form'>
      <CenterBox>
        <MainContainer>
          <Typography variant='h5' component='h1'>
            Add new product
          </Typography>
          <div className='first-input-container'>
            <TextField
              id='Title'
              label='Product Title'
              variant='outlined'
              placeholder='Product Title'
              autoComplete='off'
              fullWidth
              {...register('title')}
              helperText={errors.title?.message}
              type='input'
            />
            <TextField
              id='outlined-select-category'
              select
              {...register('category')}
              defaultValue='random'
              label='Category'
              className='select'
            >
              <MenuItem value='random'>Random</MenuItem>
              <MenuItem value='eletronics'>Eletronics</MenuItem>
              <MenuItem value='wallpaper'>Wallpaper</MenuItem>
            </TextField>
          </div>
          <TextField
            id='Description'
            label='Description'
            variant='outlined'
            placeholder='Ex.: Cargo t-shirt, size XL...'
            autoComplete='off'
            fullWidth
            multiline
            rows={10}
            {...register('description')}
            helperText={errors.description?.message}
            type='input'
          />
          <div className='second-input-container'>
            <TextField
              id='Price'
              label='Price'
              variant='outlined'
              placeholder='Price in cents'
              autoComplete='off'
              {...register('price')}
              helperText={errors.price?.message}
              type='number'
            />
            <TextField
              id='storage'
              label='Storage'
              variant='outlined'
              placeholder='Ex.: 10'
              autoComplete='off'
              {...register('storage')}
              helperText={errors.storage?.message}
              type='input'
            />
          </div>
          <div className='third-input-container'>
            <TextField
              type='file'
              id='archive'
              name='archive'
              {...register('archive')}
              onChange={e => handleImageChange(e)}
            />
          </div>
        </MainContainer>
      </CenterBox>
      <ButtonContainer className='product-form-container'>
        <CustomButton bg='secondary.light' btnType='submit'>
          <Typography
            variant='subtitle1'
            component='span'
            color='background.default'
          >
            Publish product
          </Typography>
        </CustomButton>
        <CustomButton
          bg='none'
          bgHover='none'
          variant='outlined'
          borderColor='secondary.light'
        >
          <Typography
            variant='subtitle1'
            component='span'
            color='secondary.light'
          >
            Cancel
          </Typography>
        </CustomButton>
      </ButtonContainer>
    </FormContainer>
  );
}
