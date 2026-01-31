import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import LandingPage from "../pages/LandingPage";
import GamePage from "../pages/GamePage";
import LosingPage from "../pages/LosingPage";
import WinningPage from "../pages/WinningPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingPage />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/losing",
    element: <LosingPage />,
  },
  { 
    path: "/winning",
    element: <WinningPage />,
  },
]);

export default router;
