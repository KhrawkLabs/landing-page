import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import AuDuoPage from "./AuDuoPage.tsx";
import VeloPage from "./VeloPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projetos/velo" element={<VeloPage />} />
        <Route path="/projetos/auduo" element={<AuDuoPage />} />
        {/* O produto se chamava "Duo"; mantém link antigo funcionando. */}
        <Route
          path="/projetos/duo"
          element={<Navigate to="/projetos/auduo" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
