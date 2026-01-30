import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import landingPage from "../assets/background/landingPage.png";
import NavLogo from "../components/NavLogo";


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
            backgroundColor: "background.paper",
            borderColor: "custom.border",
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
                fontFamily: "typography.fontFamily",
                color: "primary.main",
                fontWeight: "bold",
                textShadow: "2px 2px 2px rgba(0,0,0,0.8)",
              }}
            >
              The Shadows of Ba Sing Se
            </Typography>

            <Typography
              sx={{
                color: "typography.allVariants.color",
                fontFamily: "typography.fontFamily",
                fontSize: "1.2rem",
                lineHeight: 1.6,
              }}
            >
              There is no war in Ba Sing Se...{" "}
              <strong style={{ color: "palette.primary.main" }}>
                or so they want you to believe... 
              </strong>{" "}
               You have been taken to the hidden chambers beneath Lake Laogai,
              where the Dai Li are attempting to overwrite your mind. You are
              the only one who knows where Appa is hidden, and the Dai Li will
              stop at nothing to erase that memory. To break their trance, you
              must complete this mental exercise.
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
              you stumble. Identify every figure once, and only once. If you
              repeat a face, the brainwashing succeeds. Reclaim your memory.
              Save Appa. Save the world."
            </Typography>

            <Button
              onClick={() => navigate("/game")}
              variant="contained"
              sx={{
                backgroundColor: "background.default",
                color:  "typography.allVariants.color",
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
          </Stack>
        </Card>
      </Box>
      <NavLogo />
    </Box>
  );
};

export default LandingPage;
