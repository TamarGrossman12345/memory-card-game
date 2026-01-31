import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import gameBackground from "../assets/background/gameBackground.png";
import NavLogo from "../components/NavLogo";
import MemoryCard from "../components/MemoryCard";
import Scoreboard from "../components/ScoreBoard";
import getCharacters, { type Character } from "../utils/characters";
import { shuffleArray, delay } from "../utils/game";

const SHUFFLE_ANIMATION_TIME = 400;
const FLIP_DELAY = 100;

const GamePage = () => {
  const navigate = useNavigate();

  
  const [isFlippedAll, setIsFlippedAll] = useState(true); 
  const [cards, setCards] = useState(getCharacters());
  const [score, setScore] = useState(0);

  const totalCards = cards.length;

  const handleCardClick = (id: number) => {
    const clickedCard = cards.find((c) => c.id === id);

    if (clickedCard?.clicked) {
      navigate("/losing");
      return;
    }

    const updatedCards = cards.map((character) =>
      character.id === id ? { ...character, clicked: true } : character,
    );

    setScore((prev) => prev + 1);
    setCards(updatedCards);

    const win = updatedCards.every((c) => c.clicked);
    if (win) {
      navigate("/winning");
      return;
    }
    triggerShuffleEffect(updatedCards);
  };

  const triggerShuffleEffect = async (currentCards: Character[]) => {
    setIsFlippedAll(false);
    await delay(SHUFFLE_ANIMATION_TIME);

    const shuffled = shuffleArray(currentCards);
    setCards(shuffled);

    await delay(FLIP_DELAY);

    setIsFlippedAll(true);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        position: "relative",
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
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 40px",
          backgroundColor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(5px)",
        }}
      >
        <NavLogo onClick={() => navigate("/landing")} />
        <Scoreboard currentScore={score} totalCards={totalCards} />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {cards.map((character) => (
            <MemoryCard
              key={character.id}
              character={character}
              isFlipped={isFlippedAll}
              onClick={() => handleCardClick(character.id)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GamePage;
