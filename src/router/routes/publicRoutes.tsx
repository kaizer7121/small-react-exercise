import { RouteObject } from 'react-router-dom';

import { Path } from '~/constants';
import { DefaultLayout } from '~/layouts';
import { PublicRouteObject } from '~/types';

import { HomePage } from '~/pages/HomePage';
import { JSPageLayout } from '~/pages/JS';
import IntersectionObserverPage from '~/pages/JS/IntersectionObserverPage';

export const publicRoutes: (PublicRouteObject & RouteObject)[] = [
  {
    path: Path.HOME,
    element: <HomePage />,
    layout: <DefaultLayout />,
  },
  {
    path: Path.JS,
    element: <JSPageLayout />,
    layout: <DefaultLayout />,
    children: [
      {
        path: 'IntersectionObserver',
        element: <IntersectionObserverPage />,
      },
    ],
  },
];
