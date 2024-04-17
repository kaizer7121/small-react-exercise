import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

import { useSoftColor } from '~/hooks';
import { SIDEBAR_ITEMS } from '~/layouts/partials/Sidebar/helpers/items';
import { Box, useTheme } from '~/libs/mui';

export interface ISidebarMenuProps {
  collapsed: boolean;
}

export default function SidebarMenu({ collapsed }: ISidebarMenuProps) {
  const theme = useTheme();
  const location = useLocation();
  const { bgrColor, bgrHoverColor } = useSoftColor();

  const getSideMenuMargin = (numberOfSubItem: number) => {
    if (numberOfSubItem === 1) {
      return 0;
    }
    return numberOfSubItem * 5 - 3;
  };

  return (
    <Menu
      closeOnClick
      menuItemStyles={{
        button: ({ isSubmenu, open }) => {
          const isHighlighted = !isSubmenu || (isSubmenu && !open) || collapsed;
          return {
            color: theme.palette.text.strong,
            fontSize: theme.typography.body2.fontSize,
            [`&.ps-active`]: {
              backgroundColor: isHighlighted ? bgrColor : '#fff',
              color: isHighlighted ? theme.palette.primary.main : 'unset',
              fontWeight: isHighlighted ? 700 : 500,
              borderRight: isHighlighted ? '2px solid' : 'none',
            },
            [`&>.ps-menu-icon`]: {
              color: theme.palette.text.primary,
            },
            [`&>.ps-menu-icon.ps-active`]: {
              color: isHighlighted ? theme.palette.primary.main : 'unset',
            },
            [`&.ps-menu-button:hover`]: {
              backgroundColor: bgrHoverColor,
              color: theme.palette.primary.main,
              [`&>.ps-menu-icon`]: {
                color: theme.palette.primary.main,
              },
            },
            [`&.ps-active:hover`]: {
              backgroundColor: isHighlighted ? bgrColor : bgrHoverColor,
            },
          };
        },
      }}
    >
      {SIDEBAR_ITEMS.map((item) => {
        return item.children ? (
          <SubMenu
            key={item.path}
            active={location.pathname.startsWith(item.path)}
            icon={item.icon}
            label={item.name}
          >
            <Box
              marginTop={
                collapsed ? getSideMenuMargin(item.children.length) : 0
              }
            >
              {item.children.map((child) => {
                return (
                  <MenuItem
                    key={child.path}
                    active={location.pathname == child.path}
                    component={<Link to={child.path} />}
                  >
                    {child.name}
                  </MenuItem>
                );
              })}
            </Box>
          </SubMenu>
        ) : (
          <MenuItem
            key={item.path}
            active={location.pathname == item.path}
            component={<Link to={item.path} />}
            icon={item.icon}
          >
            {item.name}
          </MenuItem>
        );
      })}
    </Menu>
  );
}
