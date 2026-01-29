
import { createBrowserRouter } from "react-router-dom"; 
import LoadingPage from "../pages/LoadingPage";
import LandingPage from "../pages/LandingPage";
import GamePage from "../pages/GamePage";


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
]);


export default router;