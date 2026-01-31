import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import winningBackground from "../assets/background/winningBackground.jpg";
import NavLogo from "../components/NavLogo";
import GameCarDialog from "../components/GameCardDialog";

const WinningPage = () => {
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
        src={winningBackground}
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

      <GameCarDialog title="You Won!">
        <Typography
          sx={{
            color: "custom.textFaded",
            fontFamily: "typography.fontFamily",
            fontSize: "1.1rem",
            fontStyle: "italic",
          }}
        >
          You’ve successfully reclaimed your memories, and the path to Appa is
          finally clear. Ba Sing Se will know the truth, and the Earth Kingdom
          will rise against the shadows that sought to bind it.
        </Typography>
      </GameCarDialog>
    </Box>
  );
};

export default WinningPage;
