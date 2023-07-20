import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landingpage from './LandingPage.jsx';
import Store from './Store.jsx';
import Checkout from './Checkout.jsx';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Landingpage />,
  },

  {
    path: "/store",
    element: <Store />
  },

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
