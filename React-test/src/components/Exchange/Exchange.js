import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import "../../fonts/DMSans-Regular.ttf";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Exchange = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"DMSans-Regular"',
    },
  });

  const stats = [
    {
      number: '1M+',
      label: 'Verified users',
    },
    {
      number: '99+',
      label: 'Countries supported',
    },
    {
      number: '$99B+',
      label: 'Quarterly trading volume',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginX: 'auto', maxWidth: 'calc(100% - 180px)', marginTop: '40px' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 30, sm: 50 },
            color: '#172A4F',
            marginBottom: { xs: 5, sm: 20 },
            marginTop:{ xs: 5, sm: 10 },
          }}
        >
          BxLend is a crypto exchange for everyone.
        </Typography>
        <Grid container justifyContent="space-between" alignItems="center">
          {stats.map((stat, index) => (
            <Grid item key={stat.number} xs={12} sm={4}>
              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '30px', sm: '50px' },
                    color: '#172A4F',
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '20px', sm: '30px' },
                    color: '#172A4F',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Exchange;