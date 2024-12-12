import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.tsx";
import TanstackQueryProvider from "./_module/providers/TanstackQueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TanstackQueryProvider>
  </StrictMode>,
);
