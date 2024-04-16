import JavascriptIcon from '@mui/icons-material/Javascript';
import TitleIcon from '@mui/icons-material/Title';

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
  {
    name: PATH_LABEL[Path.TS],
    icon: <TitleIcon sx={{ fontSize: '40px' }} />,
    path: Path.TS,
    children: [
      {
        name: PATH_LABEL[Path.TS_TODO_LIST],
        path: Path.TS_TODO_LIST,
      },
    ],
  },
];
