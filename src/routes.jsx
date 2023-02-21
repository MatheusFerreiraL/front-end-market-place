import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import GlobalStyles from './styles/GlobalStyles';
import standardTheme from './theme/standardTheme';

export default function MainRoutes() {
  return (
    <ThemeProvider theme={standardTheme}>
      <GlobalStyles />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}
