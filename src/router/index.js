import React from "react";
import { useRoutes } from "react-router";

import ResponsiveDrawer from "../components/shared/drawer";
// import Employee from "../views/employee";
// import Project from "../views/project";
// import Task from "../views/tasks";
// import ReportOne from "../views/reportone";
// import ReportTwo from "../views/reporttwo";
// import ReportThree from "../views/reportThree";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      // element: <Layout />,
      element: <ResponsiveDrawer />,
      // children: [
      //   {
      //     path: "employees",
      //     element: <Employee />,
      //   },
      //   {
      //     path: "projects",
      //     element: <Project />,
      //   },
      //   { path: "tasks", element: <Task /> },
      //   { path: "report-one", element: <ReportOne /> },
      //   { path: "report-two", element: <ReportTwo /> },
      //   { path: "report-three", element: <ReportThree /> },
      // ],
    },
  ]);

  return routes;
};

export default Routes;
