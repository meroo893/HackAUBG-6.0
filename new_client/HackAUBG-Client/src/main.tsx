import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

<<<<<<< Updated upstream
import Layout from "./components/Navigation/Layout.tsx";
import NotFound from "./components/Pages/Error/NotFound.tsx";
import Index from "./components/Pages/Index/Index.tsx";
import Users from "./components/Pages/User/Users.tsx";
=======
import Layout from './components/Layout.tsx';
import NotFound from './components/NotFound.tsx';
import Index from './components/Index.tsx';
import Users from './components/Users.tsx';
import AddInformation from './components/AddInformation.tsx';
>>>>>>> Stashed changes

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'home',
        element: <Index />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'addInfo',
        element: <AddInformation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
