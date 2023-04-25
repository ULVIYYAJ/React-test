import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/action";
import { Typography, Box, Paper } from "@mui/material";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";

const Container = styled("div")(({ theme }) => ({
  marginTop: "60px",
  marginBottom: "60px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: theme.spacing(2),
  maxWidth: 1350,
}));

const StyledBox = styled(Paper)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
  height: "auto",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  border: "none",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
    height: "auto",
  },
}));

const CryptocurrencySection = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container>
      <Box>
        <Typography
          sx={{
            fontSize: isMobile ? 24 : 48,
            color: "#001131",
            marginLeft: isMobile ? 5 :6,
            marginBottom: isMobile ? 3 : 10,
          }}
        >
          Popular Cryptocurrencies
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {["Name", "Price", "24h Change", "Market Cap"].map((title, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#F2F2F2",
                flexGrow: 1,
                height: isMobile ? 48 : 68,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:
                  index === 0
                    ? "20px 0 0 20px"
                    : index === 3
                      ? "0 20px 20px 0"
                      : "none",
              }}
            >
              <Typography sx={{ fontSize: isMobile ? 14 : 24, color: "#172A4F" }}>
                {title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {data.map((item, index) => (
        <StyledBox key={index}>
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems="center"
            justifyContent="flex-start"
            style={{
              minWidth: isMobile ? "25%" : "auto",
            }}
          >
            <img
              src={item.logo_png}
              alt={item.name}
              style={{
                width: isMobile ? "30px" : "50px",
                height: "auto",
                marginRight: isMobile ? 15 : 8,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: isMobile ? 14 : 20,
                marginRight: isMobile ? 2 : 4,
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                color: "grey",
                marginTop: isMobile ? 1 : 0,
                marginLeft: isMobile ? -2 : 4,
                fontSize: isMobile ? 12 : 16,
              }}
            >
              {item.symbol}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" style={{ minWidth: isMobile ? "25%" : "auto" }}>
            <Typography sx={{ fontSize: isMobile ? 14 : 18 }}>${item.price}</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" style={{ minWidth: isMobile ? "25%" : "auto" }}>
            <Typography
              sx={{
                fontSize: isMobile ? 14 : 18,
                color: item["24h_change"].startsWith("+")
                  ? "success.main"
                  : item["24h_change"].startsWith("-")
                    ? "error.main"
                    : "black",
              }}
            >
              {item["24h_change"]}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-end" style={{ minWidth: isMobile ? "25%" : "auto" }}>
            <Typography sx={{ fontSize: isMobile ? 14 : 18 }}>${item.market_cap}</Typography>
          </Box>
        </StyledBox>
      ))}
    </Container>
  );
};

export default CryptocurrencySection;


// fontSize: isMobile ? 24 : 48,
// color: "#001131",
// marginLeft: isMobile ? 5 : 10,
// marginBottom: isMobile ? 5 : 10,
{/* <img
src={item.logo_png}
alt={item.name}
style={{
  width: isMobile ? "30px" : "50px",
  height: "auto",
  marginRight: isMobile ? 4 : 8,
}} */}