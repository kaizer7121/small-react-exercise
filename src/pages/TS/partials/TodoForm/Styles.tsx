import { Box, styled } from '@mui/material';

export const StyledFormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 700,
  margin: '0 auto 3rem',
  padding: '2rem',

  border: '1px solid rgba(0,0,0, 0.2)',
  backgroundColor: 'white',

  '& button': {
    paddingBlock: '0.5rem',
  },
});
