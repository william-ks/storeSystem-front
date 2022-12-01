import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./routes/routes";
import GlobalStyle from "./style/global";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
