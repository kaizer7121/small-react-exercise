import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Path } from '~/constants';

export function ComponentPageLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == Path.COMPONENTS) {
      navigate(Path.COMPONENTS_CALENDAR);
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <h1>ComponentPages</h1>
      <Outlet />
    </div>
  );
}
