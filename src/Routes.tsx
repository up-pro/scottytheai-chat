import { lazy } from "react";
import { Navigate, useRoutes } from "react-router";
import LandingLayout from "./layouts/LadingLayout";

// -------------------------------------------------------------------------------------------

const Chat = lazy(() => import('./pages/Chat'))

// -------------------------------------------------------------------------------------------

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <LandingLayout />,
      children: [
        {
          path: '',
          element: <Chat />
        },
        {
          path: '*',
          element: <Navigate to="/swap" replace />
        }
      ]
    }
  ])
}