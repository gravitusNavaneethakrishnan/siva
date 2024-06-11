import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import Index from './pages';
import Aboutpage from './pages/Aboutpage';
import BlogPage from './pages/BlogPage';
import Contactpage from './pages/Contactpage';
import GravitusApp from './pages/GravitusApp';
import GravitusWeb from './pages/GravitusWeb';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import Projectpage from './pages/Projectpage';
import Servicepage from './pages/Servicepage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([

    {
      path: '/Sivakamu',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/Sivakamu/portfolio" />, index: true },
        { path: 'portfolio', element: <Index /> },
        { path: 'user', element: <Aboutpage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'about',
      element: <Aboutpage />,
    },
    {
      path: 'service',
      element: <Servicepage />,
    },
    {
      path: 'project',
      element: <Projectpage />,
    },
    {
      path: 'contact',
      element: <Contactpage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'project_1',
      element: <GravitusWeb />,
    },
    {
      path: 'project_2',
      element: <GravitusApp />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/Sivakamu/portfolio" />, index: true },
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
