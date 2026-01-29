
import { createBrowserRouter } from "react-router-dom"; 
import LoadingPage from "../pages/LoadingPage";
import LandingPage from "../pages/LandingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingPage/>, 
  },
  {
    path: "/landing",
    element: <LandingPage />, 
  },
]);


export default router;