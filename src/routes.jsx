import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import Register from './pages/Register';
import standardTheme from './theme/standardTheme';

export default function MainRoutes() {
  return (
    <ThemeProvider theme={standardTheme}>
      <GlobalStyles />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}
