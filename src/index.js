import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import MainRoutes from "./routes/routes";
import GlobalStyle from "./style/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
          <GlobalStyle />
          <MainRoutes />
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
