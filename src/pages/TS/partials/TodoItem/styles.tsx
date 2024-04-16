import { Box, BoxProps, styled } from '@mui/material';

type StyledTaskInformationProps = BoxProps & {
  isDragging: boolean;
};

export const StyledTaskInformation = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'StyledTaskInformationProps',
})<StyledTaskInformationProps>(({ isDragging, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0 15px',
  minHeight: 106,
  borderRadius: 5,
  maxWidth: 311,
  backgroundColor: theme.palette.common.white,
  marginTop: 15,
  opacity: isDragging ? 0.7 : 1,

  position: 'relative',

  '& .secondary-details': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    fontSize: 12,
    fontWeight: 400,
    color: '#7d7d7d',
  },
}));

export const StyledIconContainer = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  right: 1,
}));
