import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Pages/Products.jsx";
import Cart from "./Pages/Cart.jsx";
import Success from "./Pages/Success.jsx";

import './index.css';
import App from './App.jsx';
// import reportwebVitals from './reportwebVitals';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:category?',
        element: <Products />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/Success',
        element: <Success />
      },
    ]
  }
])

ReactDom.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportwebVitals();
