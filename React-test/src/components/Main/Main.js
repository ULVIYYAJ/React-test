import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import "../../fonts/Inter-Black.otf";
import circle from "../../img/circle.png";
import CustomButton from "../CustomButton";
import styled from "styled-components";

const CustomButtonWrapper = styled.div`
  display: flex;
  gap: 45px;

  @media (min-width: 961px) {
    padding-left: 80px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    align-items: center;

    button:first-child {
      margin-bottom: -100px;
    }
  }
`;

const Main = () => {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: matches ? "column" : "row",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Typography
          sx={{
            fontSize: matches ? 28 : 90,
            color: "#172A4F",
            paddingTop: matches ? 5 : 10,
            fontFamily: "Inter-Black",
            lineHeight: matches ? "1.2" : "108.92px",
            textAlign: matches ? "center" : "left",
            paddingLeft: matches ? 0 : 10,
            paddingRight: matches ? 0 : 5,
          }}
        >
          Buy and exchange cryptocurrency instantly.
        </Typography>
        <CustomButtonWrapper>
          <CustomButton variant="primary">Get Started</CustomButton>
          <CustomButton variant="secondary">How it Works</CustomButton>
        </CustomButtonWrapper>
      </Grid>
      <Grid item xs={12} sm={6}>
        {matches ? null : (
          <Box>
            <img
              src={circle}
              alt="circle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Main;
