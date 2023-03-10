import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import GlobalStyles from './styles/GlobalStyles';
import standardTheme from './theme/standardTheme';
import { getItem } from './utils/storage';
import Header from './components/Header';
import MyProducts from './pages/MyProducts';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import NewProduct from './pages/NewProduct';

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem('token');

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
        <Route
          path='/product/detailed/:productId'
          element={<Header variation goBackThree />}
        >
          <Route path='' element={<Product />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes redirectTo='/login' />}>
          <Route path='/' element={<Header />}>
            <Route path='' element={<Home />} />
          </Route>
          <Route path='/myProducts' element={<Header variation />}>
            <Route path='' element={<MyProducts />} />
          </Route>
          <Route path='/newProduct' element={<Header variation />}>
            <Route path='' element={<NewProduct />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
