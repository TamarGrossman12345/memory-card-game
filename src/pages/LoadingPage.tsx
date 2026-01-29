import { useNavigate } from "react-router-dom";
import myLoadingGif from "../assets/background/loading.gif";
import "../styles/loadingPage.css";
import { Typography } from "@mui/material";
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
    <div className="loading-overlay">
      <img
        className="loading-background-gif"
        alt="background"
        src={myLoadingGif}
      />

      <div className="loading-content">
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'MedievalSharp', cursive",
            color: "#e1e85b",
            textAlign: "center",
            textShadow: "2px 2px 10px rgba(162, 194, 227, 0.5)",
            letterSpacing: "2px",
          }}
        >
          Loading...
        </Typography>
      </div>
    </div>
  );
};

export default LoadingPage;
