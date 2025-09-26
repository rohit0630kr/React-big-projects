import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// game of infinite level, borrow from villagers(infinite source) merge objects (of different level) build something again merge -> increase village level -> increase object level -> increase your level -> till infinite
//  NO GUI
// NO AUDIO
// NOTHING OVER-COMPLICATED
// ONLY PLAY WITH OBJECT ALL THE TIME
// inspird from MINECRAFT
