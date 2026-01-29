import { Box } from "@mui/material";

interface CardProps {
  isFlipped: boolean;
  frontImage: string; 
  backImage: string;  
  onClick: () => void;
  disabled?: boolean; // כדאי להוסיף כדי למנוע לחיצה על כרטיס שכבר פתוח
}

const MemoryCard = ({ isFlipped, frontImage, backImage, onClick, disabled }: CardProps) => {
  return (
    <Box
      onClick={!disabled ? onClick : undefined}
      sx={{
        width: 200,
        height: 280,
        perspective: "1000px",
        cursor: disabled ? "default" : "pointer",
        userSelect: "none", // מונע בחירת תמונה בכחול בלחיצות מהירות
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)", // אנימציה חלקה יותר
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* צד אחורי - מה שרואים כשהכרטיס סגור */}
        <Box
          component="img"
          src={backImage}
          alt="Card Back"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "12px", // קצת יותר מעוגל נראה מודרני
            boxShadow: 3, // הוספת צל לעומק
            objectFit: "cover",
            border: "3px solid #D4AF37",
          }}
        />

        {/* צד קדמי - הדמות שנחשפת */}
        <Box
          component="img"
          src={frontImage}
          alt="Card Front"
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
    </Box>
  );
};

export default MemoryCard;