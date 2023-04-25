import React from "react";
import { Box, Typography } from "@mui/material";
import portfolio_1 from "../../img/portfolio_1.png";
import portfolio_2 from "../../img/portfolio_2.png";
import portfolio_3 from "../../img/portfolio_3.png";
import CustomButton from "../CustomButton";
import "../../fonts/Inter-Regular.otf";
import "../../fonts/DMSans-Regular.ttf";

const inter = {
  fontFamily: "Inter-Regular",
};
const dmsans = {
  fontFamily: "DMSans-Regular",
};

const buildPortfolio = () => {
  const steps = [
    {
      number: "1.",
      title: "Verify your identity.",
      description:
        "Complete the identity verification process to secure your account<br />and transactions.",
      imagePath: portfolio_1,
    },
    {
      number: "2.",
      title: "Fund your account.",
      description:
        "Add funds to your crypto account to start trading crypto.You can<br />add funds with a variety of payment methods.",
      imagePath: portfolio_2,
    },
    {
      number: "3.",
      title: "Start trading",
      description:
        "You’re good to go! Buy/sell crypto, set up your account and discover<br />what BxLend has to offer.",
      imagePath: portfolio_3,
    },
  ];

  return (
    <Box sx={{ marginX: "auto", maxWidth: "calc(100% - 180px)", paddingX: { xs: 1, md: 2 } }}>
      <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 80 }, ...inter, color: "#001131", textAlign: { xs: "center", md: "left" }, lineHeight: "1.2" }}>
        Build your own crypto portfolio
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: 20, md: 24 },
          ...dmsans,
          color: "#001131",
          marginTop: 4,
          marginBottom: 10,
          textAlign: { xs: "center", md: "left" },
          lineHeight: "1.5",
          maxWidth: { xs: "90%", md: "80%" },
          marginLeft: { md: 10 },
        }}
      >
        Start your first trade with these easy steps.
      </Typography>
      {steps.map((step) => (
        <Box
          key={step.number}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            marginBottom: { xs: 4, md: 0 },
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { md: 82 }, color: "#001131", display: { xs: "none", md: "block" }, ...inter }}>
            {step.number}
          </Typography>
          <Box sx={{ marginLeft: { md: 2 }, flexGrow: 1 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 28, md: 36 }, color: "#001131", marginBottom: 2, lineHeight: "1.2", ...inter }}
            >
              {step.title}
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: 18, md: 24 }, color: "#001131", marginBottom: 2, lineHeight: "1.5", ...dmsans }}
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
          </Box>
          <Box
            component="span"
            sx={{
              display: "inline-block",
              position: "relative",
              left: {
                xs: 0,
                md:
                  step.number === "1."
                    ? "-200px"
                    : step.number === "2."
                      ? "70px"
                      : "-200px",
              },
              top: "-30px",
              "& img": {
                width: { xs: "100%", md: "300px" },
                height: "auto",
              },
            }}
          >
            <img src={step.imagePath} alt="step" />
          </Box>
        </Box>
      ))}
      <Box sx={{ alignSelf: "center", marginTop: { xs: -10, md: -20 } }}>
        <CustomButton variant="primary">Get Started</CustomButton>
      </Box>
    </Box>
  );
};

export default buildPortfolio;
