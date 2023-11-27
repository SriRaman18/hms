import React from "react";
import { useRoutes } from "react-router";

import ResponsiveDrawer from "../components/layout";
import AppointMents from "../views/appointMents.tsx";
import DashBoard from "../views/dashBoard.tsx";
import Patients from "../views/Patients.tsx";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashBoard />,
    },

    {
      path: "/appointMents",
      element: <AppointMents />,
    },

    { path: "/patients", element: <Patients /> },
  ]);

  return routes;
};

export default Routes;
