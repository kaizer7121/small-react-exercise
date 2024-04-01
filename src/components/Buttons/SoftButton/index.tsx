import { Button, ButtonProps } from '@mui/material';

import { useSoftColor } from '~/hooks';
import { Color } from '~/types';

interface ISoftButtonProps extends Omit<ButtonProps, 'variant' | 'color'> {
  color?: Color;
}

export function SoftButton(props: ISoftButtonProps) {
  const { bgrColor, bgrHoverColor } = useSoftColor();

  return (
    <Button
      sx={{
        backgroundColor: bgrColor,
        '&:hover': {
          backgroundColor: bgrHoverColor,
        },
      }}
      {...props}
    />
  );
}
