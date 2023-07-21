import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landingpage from './LandingPage.jsx';
import Store from './Store.jsx';
import ItemPage from './components/ItemPage.jsx'
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Landingpage />,
    errorElement: <Error />
  },

  {
    path: "/store",
    element: <Store />
  },
  {
    path: "/store/:productId",
    element: <ItemPage />
  },
  {
    path: "/testing",
    element: <ItemPage data={{ name: "Valentine", id: 1, price: 84.50, img: ['src/assets/pic1.avif', 'src/assets/pic1_1.avif'], description: 'Valentine table lamp, white marble and metal with a green painted finish'}}/>
  }

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
