import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Router.jsx';
import Authprovider from './Authprovider/Authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <Authprovider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Authprovider>
  </div>,
)
