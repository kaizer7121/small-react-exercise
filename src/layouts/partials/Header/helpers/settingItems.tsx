import {
  ExitToAppOutlinedIcon,
  SettingsSuggestOutlinedIcon,
} from '~/components/Icons';

export type SettingItem = {
  label: string;
  path?: string;
  icon?: React.ReactNode;
};
export const SETTING_ITEMS = [
  {
    label: 'Theme Customization',
    icon: <SettingsSuggestOutlinedIcon fontSize='small' />,
  },
  {
    label: 'Logout',
    icon: <ExitToAppOutlinedIcon fontSize='small' />,
  },
];
