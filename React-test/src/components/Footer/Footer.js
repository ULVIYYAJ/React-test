import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledFooter = styled(Box)({
  background: '#172A4F',
  padding: '30px 10px',
});

const FooterText = styled(Typography)({
  color: 'white',
  fontSize: 18,
});

const SocialIcons = styled(IconButton)({
  color: 'white',
});

const Footer = () => {
  return (
    <StyledFooter>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <FooterText variant="h6" align="center">Company Name</FooterText>
          <FooterText align="center">About Us</FooterText>
          <FooterText align="center">Our Services</FooterText>
          <FooterText align="center">Careers</FooterText>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FooterText variant="h6" align="center">Contact Us</FooterText>
          <FooterText align="center">Email: example.com</FooterText>
          <FooterText align="center">Phone: 1234567890</FooterText>
          <FooterText align="center">Address: Baku</FooterText>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FooterText variant="h6" align="center">Follow Us on Social Media</FooterText>
          <Box display="flex" justifyContent="center">
            <SocialIcons>
              <FacebookIcon />
            </SocialIcons>
            <SocialIcons>
              <TwitterIcon />
            </SocialIcons>
            <SocialIcons>
              <InstagramIcon />
            </SocialIcons>
          </Box>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;