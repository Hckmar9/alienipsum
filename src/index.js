import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    console.log("Mounting React app...");
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
});
