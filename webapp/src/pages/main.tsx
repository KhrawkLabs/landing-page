import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import AuDuoPage from "./AuDuoPage.tsx";
import KhrawkPage from "./KhrawkPage.tsx";
import SosMaringaPage from "./SosMaringaPage.tsx";
import SosPrivacidadePage from "./SosPrivacidadePage.tsx";
import VeloPage from "./VeloPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/khrawk" element={<KhrawkPage />} />
        <Route path="/projetos/velo" element={<VeloPage />} />
        <Route path="/projetos/auduo" element={<AuDuoPage />} />
        <Route path="/projetos/sos-maringa" element={<SosMaringaPage />} />
        {/* URL cadastrada na Play Store: não mude sem atualizar lá. */}
        <Route
          path="/projetos/sos-maringa/privacidade"
          element={<SosPrivacidadePage />}
        />
        {/* O produto se chamava "Duo"; mantém link antigo funcionando. */}
        <Route
          path="/projetos/duo"
          element={<Navigate to="/projetos/auduo" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    {/* Contagem de visitas (Vercel Web Analytics, sem cookie). Só envia dados
        em produção na Vercel; o painel fica em Analytics no projeto. */}
    <Analytics />
  </StrictMode>,
);
