import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landingpage from './components/LandingPage.jsx';
import Store from './Store.jsx';
import ItemPage from './components/ItemPage.jsx'
import Error from './components/Error.jsx';

localStorage.setItem('orders', '[]');

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Landingpage />,
    errorElement: <Error message={'No such route'}/>
  },

  {
    path: "/store",
    element: <Store />,
  },

  {
    path: "/product/:productId",
    element: <ItemPage />,
    errorElement: <Error message={'No such product'} />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
