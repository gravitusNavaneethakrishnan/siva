import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Index from './pages';
import Viewprojectpage from './pages/Viewprojectpage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    
    {
      path: '/siva',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/siva/portfolio" />, index: true },
        { path: 'portfolio', element: <Index /> },
        { path: 'user', element: <Aboutpage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'projectview',
      element: <Viewprojectpage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/siva/portfolio" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
