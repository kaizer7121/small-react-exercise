import { alpha, useTheme } from '~/libs/mui';

export const useSoftColor = () => {
  const theme = useTheme();

  const bgrColor = alpha(
    theme.palette.primary.light,
    theme.palette.action.focusOpacity,
  );

  const bgrHoverColor = alpha(
    theme.palette.primary.dark,
    theme.palette.action.focusOpacity,
  );

  return {
    bgrColor,
    bgrHoverColor,
  };
};
