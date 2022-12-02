import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { GeneralProvider } from "../context/GeneralProvider";
import useUser from "../hooks/useUser";

import Login from "../pages/login";

const SecureRoutes = ({ to }) => {
  const { token } = useUser();
  return token ? <Outlet /> : <Navigate to={to} />;
};

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />

      <Route
        element={
          <>
            <GeneralProvider>
              {/* <SideBar /> */}
              <SecureRoutes to="/" />
            </GeneralProvider>
          </>
        }
      >
        <Route />
      </Route>
    </Routes>
  );
}
