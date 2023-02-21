import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  storeName: Yup.string().required('* Store name is required'),
  email: Yup.string().email('Invalid email').required('* Email is required'),
  password: Yup.string().required('* Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    '* Passwords must match'
  ),
});

export default registerSchema;
