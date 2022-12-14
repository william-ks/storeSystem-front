import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { GeneralProvider } from "../context/GeneralProvider";
import useUser from "../hooks/useUser";
import Clients from "../pages/clients";
import Inventory from "../pages/inventory";

import Login from "../pages/login";

const SecureRoutes = ({ to }) => {
  const { token } = useUser();
  return true ? <Outlet /> : <Navigate to={to} />;
};

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />

      <Route
        element={
          <>
            <GeneralProvider>
              <SideBar />
              <SecureRoutes to="/" />
            </GeneralProvider>
          </>
        }
      >
        <Route exact path="/clientes" element={<Clients />} />
        <Route exact path="/inventario" element={<Inventory />} />
        <Route />
      </Route>
    </Routes>
  );
}

