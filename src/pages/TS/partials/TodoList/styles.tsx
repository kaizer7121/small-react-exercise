import { Style } from 'util';

import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles'; // Assuming Material UI

import { TodoStatus } from '~/pages/TS/types/todo';

type StyledTaskListProps = BoxProps & {
  isDraggingOver: boolean;
};

export const StyledTaskList = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDraggingOver',
})<StyledTaskListProps>(({ isDraggingOver }) => ({
  minHeight: 100,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: isDraggingOver ? '#e8eaf6' : '#f3f3f3',
  minWidth: 341,
  borderRadius: 5,
  padding: '15px 15px',
  marginRight: 45,
  transition: 'all 0.2s',
}));

type StyledTitleProps = BoxProps & {
  status: TodoStatus;
};

export const StyledTitle = styled(Box)<StyledTitleProps>(
  ({ theme, status }) => ({
    color: theme.palette.common.white,
    background:
      status === TodoStatus.New
        ? theme.palette.info.main
        : status === TodoStatus.InProgress
        ? theme.palette.warning.main
        : theme.palette.success.main,
    padding: '2px 10px',
    borderRadius: 5,
    alignSelf: 'flex-start',
  }),
);
