import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import IndexRoute from "./routes/IndexRoute";
import FlowRoute from "./routes/FlowRoute";
import { flowRouteLoader as flowLoader } from "../helpers/RouteLoaders";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootRoute />,
      children: [
        {
          index: true,
          element: <IndexRoute />
        },
        {
          path: "flow/:userId",
          element: <FlowRoute />,
          loader: flowLoader
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
