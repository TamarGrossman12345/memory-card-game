
import { createBrowserRouter } from "react-router-dom"; 
import LoadingPage from "../pages/LoadingPage";
import App from "../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingPage/>, 
  },
  {
    path: "/game",
    element: <App />, 
  },
]);


export default router;