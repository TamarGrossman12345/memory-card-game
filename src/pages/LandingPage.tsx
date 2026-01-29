import { Box, Button, Card, Stack, Typography } from "@mui/material";
import landingPage from "../assets/background/landingPage.png";
import "../styles/landingPage.css";
const LandingPage = () => {
  return (
    <>
      <div className="background-container">
        <img
          className="loading-background-pic"
          alt="background"
          src={landingPage}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            p: 4,
            minWidth: 300,
            backgroundColor: "rgba(62, 39, 35, 0.9)",
            borderColor: "#5D4037",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <Box sx={{ maxWidth: "600px", textAlign: "center", p: 2 }}>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily:
                    "'CustomFontHerculanum', 'MedievalSharp', cursive",
                  color: "#9d7f24",
                  fontWeight: "bold",
                  textShadow: "2px 2px 2px rgba(0,0,0,0.5)",
                }}
              >
                The Dai Li Conspiracy
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontFamily:
                    "'CustomFontHerculanum', 'MedievalSharp', cursive",
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                }}
              >
                You have been kidnapped by the <strong>Dai Li</strong> and they
                are trying to brainwash you. Only you know the whereabouts of
                the Avatar's air bison, Appa, and without him the world is in
                danger.
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontFamily:
                    "'CustomFontHerculanum', 'MedievalSharp', cursive",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                You must regain control of your memory by doing this mind
                exercise in order to help the Avatar.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3E2723",
                  color: "#9d7f24",
                  fontFamily: "'CustomFontHerculanum', cursive",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  border: "2px solid #9d7f24",
                  padding: "12px 40px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                  transition: "all 0.3s ease-in-out", 

                  "&:hover": {
                    backgroundColor: "#5D4037", 
                    color: "#FFF",
                    transform: "scale(1.01)", 
                    boxShadow: "0 2px 10px rgba(212, 175, 55, 0.4)", 
                    borderColor: "#FFF",
                  },
                }}
              >
                Start Game
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default LandingPage;
