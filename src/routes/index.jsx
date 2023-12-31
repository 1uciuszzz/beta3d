import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import Introductions from "../pages/Introductions";
import Clip from "../pages/Clip";
import LocalModel from "../pages/LocalModel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Introductions />,
      },
      {
        path: "clip",
        element: <Clip />,
      },
      {
        path: "local-model",
        element: <LocalModel />,
      },
    ],
  },
]);
