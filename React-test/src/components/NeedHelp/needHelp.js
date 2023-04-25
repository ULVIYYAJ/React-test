import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CustomButton from '../CustomButton';

const StyledBox = styled(Box)({
  margin: '80px 80px',
});

const StyledTitle = styled(Typography)({
  fontSize: 64,
  color: '#000000',
});

const NeedHelp = () => {
  return (
    <StyledBox sx={{ textAlign: { xs: 'center', sm: 'initial' } }}>
      <StyledTitle
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '3rem',
            lg: '4rem',
            xl: 64,
          },
        }}
      >
        Start earning today
      </StyledTitle>
      <CustomButton
        variant="primary"
        onClick={() => console.log('Clicked!')}
        sx={{ display: { xs: 'block', sm: 'inline-block' }, mx: { xs: 'auto', sm: '0' } }}
      >
        Join us now!
      </CustomButton>
    </StyledBox>
  );
};

export default NeedHelp;

