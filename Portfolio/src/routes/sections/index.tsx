import { Navigate, useRoutes } from 'react-router-dom';


import { mainRoutes } from './main';
import { CONFIG } from 'src/config-global';
import { ProfileRoutes } from './dashboard';

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={CONFIG.profile.redirectPath} replace />,
    },
    
    // PROFILE
    ...ProfileRoutes,

    // Main
    ...mainRoutes,

    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
