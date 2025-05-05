import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js'
      data-cf-beacon='{"token": "fe1b0c057be24681a9a3c0134775eb76"}'></script>
  </React.StrictMode>
);
