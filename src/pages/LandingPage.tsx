import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import landingPage from "../assets/background/landingPage.png";
import NavLogo from "../components/NavLogo";


const THEME = {
  colors: {
    primary: "#9d7f24",
    bgDark: "rgba(62, 39, 35, 0.9)",
    bgSolid: "#3E2723",
    border: "#5D4037",
    textWhite: "rgba(255, 255, 255, 0.9)",
    textFaded: "rgba(255, 255, 255, 0.7)",
  },
  fonts: {
    main: "'CustomFontHerculanum', 'MedievalSharp', cursive",
  },
};

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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            p: { xs: 3 },
            minWidth: 300,
            maxWidth: 600,
            backgroundColor: THEME.colors.bgDark,
            borderColor: THEME.colors.border,
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            textAlign: "center",
            backdropFilter: "blur(5px)",
          }}
        >
          <Stack spacing={3}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: THEME.fonts.main,
                color: THEME.colors.primary,
                fontWeight: "bold",
                textShadow: "2px 2px 2px rgba(0,0,0,0.8)",
              }}
            >
              The Dai Li Conspiracy
            </Typography>

            <Typography
              sx={{
                color: THEME.colors.textWhite,
                fontFamily: THEME.fonts.main,
                fontSize: "1.2rem",
                lineHeight: 1.6,
              }}
            >
              You have been kidnapped by the{" "}
              <strong style={{ color: THEME.colors.primary }}>Dai Li</strong>{" "}
              and they are trying to brainwash you. Only you know the
              whereabouts of the Avatar's air bison, Appa, and without him the
              world is in danger.
            </Typography>

            <Typography
              sx={{
                color: THEME.colors.textFaded,
                fontFamily: THEME.fonts.main,
                fontSize: "1.1rem",
                fontStyle: "italic",
              }}
            >
              You must regain control of your memory by doing this mind exercise
              in order to help the Avatar.
            </Typography>

            <Button
              onClick={() => navigate("/game")}
              variant="contained"
              sx={{
                backgroundColor: THEME.colors.bgSolid,
                color: THEME.colors.primary,
                fontFamily: THEME.fonts.main,
                fontSize: "1.2rem",
                fontWeight: "bold",
                letterSpacing: "2px",
                border: `2px solid ${THEME.colors.primary}`,
                padding: "12px 40px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease-in-out",

                "&:hover": {
                  backgroundColor: THEME.colors.border,
                  color: "#FFF",
                  transform: "scale(1.02)",
                  borderColor: "#FFF",
                  boxShadow: `0 0 15px ${THEME.colors.primary}`,
                },
              }}
            >
              Start Game
            </Button>
          </Stack>
        </Card>
      </Box>
            <NavLogo/>
    </Box>
  );
};

export default LandingPage;
