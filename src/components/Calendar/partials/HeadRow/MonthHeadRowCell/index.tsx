import { useDayPicker } from 'react-day-picker';

import { Stack, Typography } from '~/libs/mui';

export interface IMonthHeadRowCellProps {
  weekday: Date;
}

export default function MonthHeadRowCell({ weekday }: IMonthHeadRowCellProps) {
  const {
    locale,
    formatters: { formatWeekdayName },
  } = useDayPicker();
  return (
    <Stack alignItems='center' justifyContent='center'>
      <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
        {formatWeekdayName(weekday, { locale })}
      </Typography>
    </Stack>
  );
}
