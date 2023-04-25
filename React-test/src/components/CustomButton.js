import React from "react";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomButton = ({ variant, onClick, children, marginLeft }) => {
  const isMobile = useMediaQuery("(max-width:390px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const commonStyles = {
    width: isMobile ? "100%" : isTablet ? 200 : 261,
    height: isMobile ? 40 : isTablet ? 50 : 66,
    borderRadius: 30,
    color: "#001131",
    marginTop: 10,
    textTransform: "none",
  };

  const styles =
    variant === "primary"
      ? {
          ...commonStyles,
          background: "linear-gradient(270deg, #00FEB9 0%, #00FAFD 100%)",
        }
      : {
          ...commonStyles,
          backgroundColor: "white",
          border: "2px solid #001131",
          marginLeft: marginLeft ? `${marginLeft}px` : "0px",
        };

  return (
    <Button sx={styles} onClick={onClick}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {children}
      </div>
    </Button>
  );
};

export default CustomButton;