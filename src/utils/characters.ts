import AANG from "../../constant/charactersImg/aang.png";
import ZUKO from "../../constant/charactersImg/zuko.jpg";
import AZULA from "../../constant/charactersImg/azula.jpg";
import IROH from "../../constant/charactersImg/iroh.png";
import KATARA from "../../constant/charactersImg/katara.jpg";
import MOMO from "../../constant/charactersImg/momo.png";
import PAKKU from "../../constant/charactersImg/pakku.png";
import SUKI from "../../constant/charactersImg/suki.jpg";
import TOPH from "../../constant/charactersImg/toph.png";

export interface Character {
  id: number;
  name: string;
  src: string;
  clicked: boolean;
}

const characters = [
  { id: 1, name: "Aang", src: AANG, clicked: false },
  { id: 2, name: "Zuko", src: ZUKO, clicked: false },
  { id: 3, name: "Azula", src: AZULA, clicked: false },
  { id: 4, name: "Iroh", src: IROH, clicked: false },
  { id: 5, name: "Katara", src: KATARA, clicked: false },
  { id: 6, name: "Momo", src: MOMO, clicked: false },
  { id: 7, name: "Pakku", src: PAKKU, clicked: false },
  { id: 8, name: "Suki", src: SUKI, clicked: false },
  { id: 9, name: "Toph", src: TOPH, clicked: false },
];

export default function getCharacters() {
  return characters.map(character => ({ ...character }));
}