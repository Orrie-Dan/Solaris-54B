import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import { I18nProvider } from "./i18n.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <I18nProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nProvider>
    </HelmetProvider>
  </StrictMode>,
)
