import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Login from '../pages/login'

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />

      <Route
        element={
          <>
            {/* <GeneralProvider> */}
            {/* <SideBar /> */}
            <Outlet />
            {/* </GeneralProvider> */}
          </>
        }
      >
        <Route />
      </Route>
    </Routes>
  );
}