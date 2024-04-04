import { Card, styled } from '@mui/material';

export const StyledImageItem = styled(Card)(() => ({
  textAlign: 'center',
  padding: 20,
  marginBottom: 50,

  img: {
    borderRadius: 5,
  },
}));
