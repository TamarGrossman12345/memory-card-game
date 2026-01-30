import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from './routes/appRouter'
import { RouterProvider } from "react-router";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@emotion/react";


createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </ThemeProvider>
);
