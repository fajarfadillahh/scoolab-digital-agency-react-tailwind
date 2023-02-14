import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";

// import portfolio provider
import PortfolioProvider from "./context/PortfolioContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PortfolioProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PortfolioProvider>
);
