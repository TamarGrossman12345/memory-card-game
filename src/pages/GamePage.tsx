import { Box } from "@mui/material";
import gameBackground from "../assets/background/gameBackground.png";
import NavLogo from "../components/NavLogo";
import { useNavigate } from "react-router-dom";
import MemoryCard from "../components/MemoryCard";
import zukoImg from "../../constant/characters/zuko.jpg";
import back from "../../constant/characters/card-back.webp";

const GamePage = () => {

  const navigate = useNavigate();

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
          {/* כאן תריץ את ה-Map שלך */}
          {/* כאן יבוא ה-Map שלך */}
          {/* {cards.map((card) => (
      <MemoryCard 
        key={card.id} 
        isFlipped={isFlipping} 
        frontImage={card.img} 
        backImage={back} 
        onClick={() => handleCardClick(card.id)} 
      />
    ))} */}
          <MemoryCard
            isFlipped={true}
            frontImage={zukoImg}
            backImage={back}
            onClick={() => {}}
          />
          <MemoryCard
            isFlipped={false}
            frontImage={zukoImg}
            backImage={back}
            onClick={() => {}}
          />
          <MemoryCard
            isFlipped={false}
            frontImage={zukoImg}
            backImage={back}
            onClick={() => {}}
          />
          <MemoryCard
            isFlipped={false}
            frontImage={zukoImg}
            backImage={back}
            onClick={() => {}}
          />
          <MemoryCard
            isFlipped={false}
            frontImage={zukoImg}
            backImage={back}
            onClick={() => {}}
          />
          <MemoryCard
            isFlipped={false}
            frontImage={zukoImg}
            backImage={back}
            onClick={() => {}}
          />
          <MemoryCard
            isFlipped={false}
            frontImage={zukoImg}
            backImage={back}
            onClick={() => {}}
          />
          <MemoryCard
            isFlipped={false}
            frontImage={zukoImg}
            backImage={back}
            onClick={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GamePage;
