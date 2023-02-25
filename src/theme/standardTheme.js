import { createTheme } from '@mui/material/styles';

const standardTheme = createTheme({
  palette: {
    primary: {
      main: '#32323B',
      light: '#383842',
      dark: '#B7005C',
    },
    secondary: {
      main: '#32323B',
      light: '#D10070',
      dark: '#191919',
    },
    error: {
      main: '#AF1717',
    },
    warning: {
      main: '#EBBC2E',
    },
    success: {
      main: '#105136',
    },
    grey: {
      50: '#9B9B9B',
      100: '#C6C6C6',
      200: '#FCFCFC',
    },
    background: {
      default: '#F4F4F4',
    },
  },
  typography: {
    fontFamily: 'Public Sans, sans-serif',
    h1: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 500,
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 500,
      fontSize: '3rem',
    },
    h3: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h4: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h5: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
    },
    button: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 700,
      fontSize: '1rem',
    },
    caption: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
  },
});

export default standardTheme;
