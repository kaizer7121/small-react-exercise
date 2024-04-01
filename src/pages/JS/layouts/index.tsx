import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Path } from '~/constants';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == Path.JS) {
      navigate(Path.JS_INTERSECTION_OBSERVER);
    }
  }, [location.pathname, navigate]);

  return <Outlet />;
}
