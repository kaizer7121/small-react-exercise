import { RouteObject } from 'react-router-dom';

import { Path } from '~/constants';
import { DefaultLayout } from '~/layouts';
import { PublicRouteObject } from '~/types';

import { HomePage } from '~/pages/HomePage';
import { JSPageLayout } from '~/pages/JS';
import IntersectionObserverPage from '~/pages/JS/IntersectionObserverPage';
import { PromiseRacePage } from '~/pages/JS/PromiseRacePage';
import { TSPageLayout } from '~/pages/TS';
import TodoListPage from '~/pages/TS/TodoListPage';

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
        path: Path.JS_INTERSECTION_OBSERVER_RELATIVE,
        element: <IntersectionObserverPage />,
      },
      {
        path: Path.JS_PROMISE_RACE_RELATIVE,
        element: <PromiseRacePage />,
      },
    ],
  },
  {
    path: Path.TS,
    element: <TSPageLayout />,
    layout: <DefaultLayout />,
    children: [
      {
        path: Path.TS_TODO_LIST_RELATIVE,
        element: <TodoListPage />,
      },
    ],
  },
];
