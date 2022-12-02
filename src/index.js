import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/UserProvider";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
