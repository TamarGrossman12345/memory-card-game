import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import landingPage from "../assets/background/landingPage.png";
import NavLogo from "../components/NavLogo";
import GameCarDialog from "../components/GameCardDialog";

const LandingPage = () => {
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
        src={landingPage}
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


      <NavLogo/>

      <GameCarDialog title="The Shadows of Ba Sing Se">
        
        <Typography
          sx={{
            color: "typography.allVariants.color",
            fontFamily: "typography.fontFamily",
            fontSize: "1.2rem",
            lineHeight: 1.6,
          }}
        >
          There is no war in Ba Sing Se...{" "}
          <Box 
            component="span" 
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            or so they want you to believe...
          </Box>{" "}
          You have been taken to the hidden chambers beneath Lake Laogai,
          where the Dai Li are attempting to overwrite your mind. You are
          the only one who knows where Appa is hidden, and the Dai Li will
          stop at nothing to erase that memory.
        </Typography>

        <Typography
          sx={{
            color: "custom.textFaded",
            fontFamily: "typography.fontFamily",
            fontSize: "1.1rem",
            fontStyle: "italic",
          }}
        >
          They will shuffle your thoughts after every choice, trying to make
          you stumble. Identify every figure once, and only once.
        </Typography>

        <Button
          onClick={() => navigate("/game")}
          variant="contained"
          sx={{
            backgroundColor: "background.default",
            color: "typography.allVariants.color",
            fontFamily: "typography.fontFamily",
            fontSize: "1.2rem",
            fontWeight: "bold",
            letterSpacing: "2px",
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            padding: "12px 40px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            transition: "all 0.3s ease-in-out",

            "&:hover": {
              backgroundColor: "custom.border",
              color: "#FFF",
              transform: "scale(1.02)",
              borderColor: "#FFF",
              boxShadow: (theme) => `0 0 15px ${theme.palette.primary.main}`,
            },
          }}
        >
          Start Game
        </Button>
      </GameCarDialog>
    </Box> 
  );
};

export default LandingPage;