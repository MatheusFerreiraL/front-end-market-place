import * as Yup from 'yup';

const newProdSchema = Yup.object().shape({
  title: Yup.string().required('* Title is required'),
  description: Yup.string().required('* Description is required'),
  price: Yup.number().required('* Price is required'),
  storage: Yup.number().required('* Price is required'),
});

export default newProdSchema;
