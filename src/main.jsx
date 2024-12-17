import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Layout from './components/Layout';
import Search from './components/Search';
import Notfound from './components/Notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Notfound />
  },
  {
    path: '/search',
    element: <Search />,
    errorElement: <Notfound />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
