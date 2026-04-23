import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,
        style: {
          background: "#0f172a",
          color: "#fff",
          borderRadius: "12px",
          padding: "14px",
          fontWeight: "600",
        },
      }}
    />
  </React.StrictMode>
);