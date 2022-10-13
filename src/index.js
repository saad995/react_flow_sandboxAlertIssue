import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router/Router";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);
