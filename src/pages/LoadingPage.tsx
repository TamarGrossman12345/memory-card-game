import { useNavigate } from "react-router-dom";
import myLoadingGif from "../assets/background/loading.gif";
import "../styles/loadingPage.css";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

const LoadingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 2800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          zIndex: -1,
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={myLoadingGif}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
            filter: "blur(4px) brightness(0.7)",
            transform: "scale(1)",
          }}
        ></Box>
    
          <Typography
            variant="h2"
            sx={{
              position: "relative",
              animation: "pulse 1.5s infinite ease-in-out",
              zIndex: 1,
              fontFamily: "'MedievalSharp', cursive",
              color: "#e1e85b",
              textAlign: "center",
              textShadow: "2px 2px 10px rgba(162, 194, 227, 0.5)",
              letterSpacing: "2px",
            }}
          >
            Loading...
          </Typography>
    
      </Box>
    </>
  );
};

export default LoadingPage;
