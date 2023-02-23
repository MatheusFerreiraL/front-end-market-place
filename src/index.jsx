import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import { UserProvider } from './contexts/userProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
