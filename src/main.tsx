import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-green-700 font-extrabold h-24 text-4xl">WhatsApp</h1>
  </StrictMode>
);
