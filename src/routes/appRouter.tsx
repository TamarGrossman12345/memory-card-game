
import { createBrowserRouter } from "react-router-dom"; 
import LoadingPage from "../pages/LoadingPage";
import LandingPage from "../pages/LandingPage";
import GamePage from "../pages/GamePage";
import LosingPage from "../pages/LosingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingPage/>, 
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
]);


export default router;