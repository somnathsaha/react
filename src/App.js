import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
import HeaderComponent from './components/HeaderComponent';
import RestaurantMenu from './components/RestaurantMenu';

// const router
const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/menu/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
