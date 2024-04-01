import { Box, Skeleton, Stack, styled } from '@mui/material';

export const StyledItemContainer = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
}));

export const StyledItem = styled(Box)(({ theme }) => ({
  width: '30%',
  height: 150,
  margin: 6,
  transition: 'all 0.5s',
  backgroundColor: theme.palette.primary.main,
  padding: 0,
  borderRadius: 3,
  justifyContent: 'center',
  alignItems: ' center',
  display: 'flex',
}));

export const StyledSkeletonItem = styled(Skeleton)(() => ({
  width: '30%',
  height: 150 * (10 / 6),
  margin: 6,
  transition: 'all 0.5s',
  padding: 0,
}));
