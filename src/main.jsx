import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StohrApp } from "./StohrApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StohrApp />
    </BrowserRouter>
  </React.StrictMode>
);
