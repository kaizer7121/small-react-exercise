import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import { Path } from '~/constants';
import { layout } from '~/router/layout';
import { publicRouteLoader } from '~/router/loaders';
import { publicRoutes } from '~/router/routes/publicRoutes';

import { App } from '~/pages/App';
import { FallbackPage } from '~/pages/Errors';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: Path.HOME,
      element: <App />,
      ErrorBoundary: FallbackPage as React.ComponentType,
      children: [
        ...publicRoutes.map((route) => ({
          ...route,
          loader: () => publicRouteLoader(),
          element: layout(route.layout, route.element),
        })),
        {
          path: '*',
          loader: () => redirect(Path.NOT_FOUND),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
