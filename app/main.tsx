import "~/app/styles/main.css";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";

function App() {
  return (
    <Suspense fallback={<p className="p-6">Loading…</p>}>
      {useRoutes(routes)}
    </Suspense>
  );
}

const root = document.getElementById("app");
if (!root) {
  throw new Error('Missing root element "#app"');
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
