import { Box } from "@mui/material";
import gameBackground from "../assets/background/gameBackground.png";
import NavLogo from "../components/NavLogo";
import { useNavigate } from "react-router-dom";
import MemoryCard from "../components/MemoryCard";

import { useState } from "react";
import getCharacters, { type Character } from "../utils/characters";
import Scoreboard from "../components/ScoreBoard";

const GamePage = () => {
  const navigate = useNavigate();
  const [isFlippedAll, setIsFlippedAll] = useState(true);
  const [cards, setCards] = useState(getCharacters());
  const [score, setScore] = useState(0);
  const totalCards = cards.length;

  const shuffleArray = (array: Character[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCardClick = (id: number) => {
    const clickedCard = cards.find((c) => c.id === id);

    if (clickedCard?.clicked) {
      alert("The brainwashing worked... Game Over!");
      // resetGame();
      return;
    }

    const updatedCards = cards.map((char) => {
      if (char.id === id) {
        return { ...char, clicked: true };
      }

      return char;
    });

    setScore(score + 1);
    setCards(updatedCards);

    const win = updatedCards.every((c) => c.clicked);
    if (win) {
      alert("You remembered everyone! Appa is safe!");
      return;
    }

    triggerShuffleEffect(updatedCards);
  };

  const triggerShuffleEffect = (currentCards: Character[]) => {
    setIsFlippedAll(false);

    setTimeout(() => {
      const shuffled = shuffleArray(currentCards);
      setCards(shuffled);

      setTimeout(() => {
        setIsFlippedAll(true);
      }, 100);
    }, 400);
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
          width: "100%",
          left: 1000,
          top: 30,
          zIndex: 10,
        }}
      >
        <Scoreboard currentScore={score} totalCards={totalCards}/>
      </Box>

      <Box
        sx={{
          position: "relative",
          top: 130,
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
              clicked={character.clicked}
              onClick={() => handleCardClick(character.id)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GamePage;
