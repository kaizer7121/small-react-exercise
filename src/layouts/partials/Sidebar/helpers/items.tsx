import JavascriptIcon from '@mui/icons-material/Javascript';

import { Path, PATH_LABEL } from '~/constants';
import { SidebarItem } from '~/types/sidebar';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    name: PATH_LABEL[Path.JS],
    icon: <JavascriptIcon sx={{ fontSize: '60px' }} />,
    path: Path.JS,
    children: [
      {
        name: PATH_LABEL[Path.JS_INTERSECTION_OBSERVER],
        path: Path.JS_INTERSECTION_OBSERVER,
      },
      {
        name: PATH_LABEL[Path.JS_PROMISE_RACE],
        path: Path.JS_PROMISE_RACE,
      },
    ],
  },
];
