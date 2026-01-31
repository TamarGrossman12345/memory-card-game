import { Box, Typography } from "@mui/material";
import losingPage from "../assets/background/losingPage.jpg";
import GameCarDialog from "../components/GameCardDialog";
import NavLogo from "../components/NavLogo";
import { useNavigate } from "react-router-dom";

const LosingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={losingPage}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 10 }}>
        <NavLogo onClick={() => navigate("/landing")} />
      </Box>

      <GameCarDialog title="You Lost">
        <Typography
          sx={{
            color: "custom.textFaded",
            fontFamily: "typography.fontFamily",
            fontSize: "1.1rem",
            fontStyle: "italic",
          }}
        >
          The Dai Li agents have successfully scrambled your memories. Appa
          remains hidden, and the secret of the war is safe.
        </Typography>
      </GameCarDialog>
    </Box>
  );
};

export default LosingPage;
