import { lazy, Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import { DashboardLayout } from 'src/layouts/dashboard';




const ProfilePage = lazy(() => import('src/pages/portfolio/portfolio-page'));

const LayoutWrapper = () => (
    <DashboardLayout>
      <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
    </DashboardLayout>
);


export const profileRoutes = [
  {
  path: 'portfolio',
  element: <LayoutWrapper />,  // ✅ Correct (calls the function)
  children: [
    { element: <ProfilePage />, index: true },
    { path: 'profile', element: <ProfilePage /> },
  ]
}

];
