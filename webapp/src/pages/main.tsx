import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import SosMaringaPage from "./SosMaringaPage.tsx";
import VeloPage from "./VeloPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projetos/sos-maringa" element={<SosMaringaPage />} />
        <Route path="/projetos/velo" element={<VeloPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
