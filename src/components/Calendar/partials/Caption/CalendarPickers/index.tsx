import { ReactNode, useContext, useState } from 'react';
import { format, setMonth } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useDayPicker, useNavigation } from 'react-day-picker';

import { MonthCalendar, YearCalendar } from '@mui/x-date-pickers';

import { Menu, Stack, Typography, TypographyProps } from '~/libs/mui';

import { CalendarContext } from '~/components/Calendar/context/CalendarContext';
import { ArrowDropDownIcon, ArrowDropUpIcon } from '~/components/Icons';

export interface ICalendarPickersProps {
  displayMonth: Date;
}

interface IPickerLabelProps extends TypographyProps {
  children: ReactNode;
}
const PickerLabel = ({ children, ...rest }: IPickerLabelProps) => (
  <Typography
    sx={{
      fontWeight: 700,
      textTransform: 'capitalize',
      mr: 1,
      ['&:hover']: {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    }}
    variant='subtitle1'
    {...rest}
  >
    {children}
  </Typography>
);

enum PickerType {
  Month,
  Year,
}

export function CalendarPickers(props: ICalendarPickersProps) {
  const { selected } = useDayPicker();
  const { goToMonth, currentMonth } = useNavigation();
  const { goToWeek } = useContext(CalendarContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [pickerType, setPickerType] = useState<PickerType>(PickerType.Month);
  const open = Boolean(anchorEl);

  // Handles the click event for the month picker
  const handleMonthClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setPickerType(PickerType.Month);
  };

  // Handles the click event for the year picker
  const handleYearClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setPickerType(PickerType.Year);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handles the change event for both the month and year pickers
  const onChange = (date: Date, type: PickerType) => {
    const month =
      type === PickerType.Month
        ? new Date(date.toISOString())
        : setMonth(new Date(date.toISOString()), currentMonth.getMonth());

    goToMonth(month);
    goToWeek(month);
  };

  return (
    <>
      <Stack alignItems='center' direction='row'>
        <PickerLabel onClick={(e) => handleMonthClick(e)}>
          {format((selected as Date) || props.displayMonth, 'MMMM', {
            locale: vi,
          })}
          ,
        </PickerLabel>
        <PickerLabel onClick={(e) => handleYearClick(e)}>
          {format((selected as Date) || props.displayMonth, 'yyyy', {
            locale: vi,
          })}
        </PickerLabel>
        <>{anchorEl == null ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</>
      </Stack>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorEl={anchorEl}
        id='basic-menu'
        open={open}
        onClose={handleClose}
      >
        {pickerType === PickerType.Month ? (
          <MonthCalendar
            onChange={(date: Date) => onChange(date, PickerType.Month)}
          />
        ) : (
          <YearCalendar
            onChange={(date: Date) => onChange(date, PickerType.Year)}
          />
        )}
      </Menu>
    </>
  );
}
