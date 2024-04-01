import { Outlet } from 'react-router-dom';

import { CssBaseline } from '~/libs/mui';

export function App() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}
