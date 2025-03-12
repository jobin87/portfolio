import { lazy, Suspense} from 'react';
import { Outlet } from 'react-router-dom';




// Roles
// const StaffRolesList = lazy(() => import('src/pages/dashboard/settings/staff/roles'));

import { LoadingScreen } from 'src/components/loading-screen';
import { DashboardLayout } from 'src/layouts/dashboard';




// ----------------------------------------------------------------------


const ProfilePage = lazy(() => import('src/pages/profile/root'));

// ----------------------------------------------------------------------

// Layout wrapper with a loading fallback
const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const ProfileRoutes = [{
  path: 'profile',
  element: <>{layoutContent}</>,
  children: [
    { element: <ProfilePage/>, index: true },
    { path: 'ecommerce', element: <ProfilePage/> },
  ]
}]