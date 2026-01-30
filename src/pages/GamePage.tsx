import { Box } from "@mui/material";
import gameBackground from "../assets/background/gameBackground.png";
import NavLogo from "../components/NavLogo";
import { useNavigate } from "react-router-dom";
import MemoryCard from "../components/MemoryCard";

import { useState } from "react";
import getCharacters from "../utils/characters";

const GamePage = () => {
  const navigate = useNavigate();
  const [isFlippedAll, setIsFlippedAll] = useState(true);
  const [cards, setCards] = useState(getCharacters());

  const handleCardClick = () => {
    triggerShuffleEffect();
  };

  const triggerShuffleEffect = () => {
    setIsFlippedAll(false);
    setTimeout(() => {
      setIsFlippedAll(true);
    }, 800);
        
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={gameBackground}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: 10,
        }}
      >
        <NavLogo onClick={() => navigate("/landing")} />
      </Box>

      <Box
        sx={{
          position: "relative",
          top: 130,
          left: 0,
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            gap: 2,
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          {cards.map((character) => (
            <MemoryCard
              key={character.id}
              character={character}
              isFlipped={isFlippedAll}
              onClick={handleCardClick}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GamePage;
