import { Navigate, useRoutes } from 'react-router-dom';


import { mainRoutes } from './main';
import { CONFIG } from 'src/config-global';
import {  profileRoutes } from './portfolio';

// ----------------------------------------------------------------------

export function Router() {
  console.log("Redirect Path:", CONFIG.portfolio.redirectPath ); // ✅ Correct Placement

  return useRoutes([
    {
      path: '/',
      element: <Navigate to={CONFIG.portfolio.redirectPath } replace />,
      
    },
    // PROFILE
    ...profileRoutes,
    ...mainRoutes,

    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

