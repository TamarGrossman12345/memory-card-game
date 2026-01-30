import { Box, Typography } from "@mui/material";

interface ScoreboardProps {
  currentScore: number;
  totalCards: number
}

const Scoreboard = ({ currentScore, totalCards }: ScoreboardProps) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "typography.fontFamily",
          color: "custom.textFaded",
          fontWeight: "bold",
          textShadow: "2px 2px 2px rgba(0,0,0,0.8)",
        }}
      >
        Current Score: {currentScore} / {totalCards}
      </Typography>
    </Box>
  );
};

export default Scoreboard;
