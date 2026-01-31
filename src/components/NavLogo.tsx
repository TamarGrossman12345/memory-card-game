import { Box } from "@mui/material";
import LOGO from "../assets/logos/avatar-the-last-airbender-logo.png";

interface NavLogoProps {
  onClick?: () => void;
}

const NavLogo = ({ onClick }: NavLogoProps) => {
  return (
    <Box
      component="img"
      role="button"
      onClick={onClick}
      src={LOGO}
      sx={{
        position: "absolute",
        top: 30,
        left: 30,
        width: "250px",
        height: "150px",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        objectFit: "contain",
        "&:hover": {
          transform: "scale(1.04)",
        },
      }}
    />
  );
};

export default NavLogo;
