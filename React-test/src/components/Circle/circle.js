import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  margin: '0 50px',
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 64,
  color: '#172A4F',
  marginTop: 20,
  marginLeft: 'auto',
  [theme.breakpoints.down('sm')]: {
    fontSize: 48,
  },
}));

const StyledSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: 40,
  color: '#172A4F',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: 28,
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: 27,
  color: '#5C5C5C',
  textAlign: 'center',
  marginBottom: 16,
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
    marginBottom: 12,
  },
}));

const Circle = styled('div')(({ theme }) => ({
  width: 196,
  height: 196,
  borderRadius: '50%',
  background: 'rgba(23, 42, 79, 0.69)',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    width: 150,
    height: 150,
  },
}));

export default function CustomSection() {
  return (
    <StyledBox>
      <StyledTitle>Need help?</StyledTitle>
      <Grid container justifyContent="space-between" spacing={4}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item key={index} xs={12} sm={4} alignItems="center" display="flex" flexDirection="column">
            <Circle />
            <StyledSubTitle>Chat Support</StyledSubTitle>
            <StyledText>lorem ipsum</StyledText>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
}