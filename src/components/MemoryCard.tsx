import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";
import type { Character } from "../utils/characters";
import BACKGROUND from "../../constant/charactersImg/card-back.webp";

interface CardProps {
  isFlipped: boolean;
  character: Character;
  onClick: () => void;
  clicked: boolean;
}

const MemoryCard = ({ isFlipped, character, onClick }: CardProps) => {


  return (
    <Box
      onClick={onClick}
      sx={{
        width: 200,
        height: 280,
        perspective: "1000px",
        userSelect: "none",
      }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="12px"
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
  
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "280px",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <Box
            component="img"
            src={BACKGROUND}
            alt="Card Back"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              borderRadius: "12px",
              boxShadow: 3,
              objectFit: "cover",
              border: "3px solid #D4AF37",
    
              overflow: "hidden", 
            }}
          />

          <Box
            component="img"
            src={character.src}
            alt={character.name}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)", 
              borderRadius: "12px",
              boxShadow: 3,
              objectFit: "cover",
              border: "3px solid #D4AF37",
              backgroundColor: "#fff",
            }}
          />
        </Box>
      </Tilt>
    </Box>
  );
};

export default MemoryCard;