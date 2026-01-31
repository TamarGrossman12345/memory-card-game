import { Box, Card, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface GameCardProps {
  title: string;
  children?: ReactNode; 
}

const GameCarDialog = ({ title, children }: GameCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // שיניתי ל-vh כדי שימרכז על כל המסך
        width: "100%",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          p: { xs: 3, md: 5 },
          minWidth: 300,
          maxWidth: 600,
          backgroundColor: "background.paper",
          borderColor: "custom.border",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          borderRadius: "12px",
          textAlign: "center",
          backdropFilter: "blur(5px)",
          "&:hover": {transform: "scale(1.02)", transition: "transform 0.3s ease-in-out"},
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
            {title}
          </Typography>

          {children} 
        </Stack>
      </Card>
    </Box>
  );
};

export default GameCarDialog;