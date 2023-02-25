import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import GlobalStyles from './styles/GlobalStyles';
import standardTheme from './theme/standardTheme';
import { getItem } from './utils/storage';
import Header from './components/Header';

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem('token');

  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <ThemeProvider theme={standardTheme}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='' element={<Home />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes redirectTo='/' />}>
          <Route path='/' element={<Header />}>
            <Route path='' element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
