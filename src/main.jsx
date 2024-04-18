import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Outlet from "./components/Outlet";
import App from "./App";
import './index.css'

const rootElement = document.getElementById("root");
const root =
 createRoot(rootElement);

root.render(
  <StrictMode>
    <Outlet />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
