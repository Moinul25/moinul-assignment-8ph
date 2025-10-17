import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../pages/Home";
import Showlessapp from "../pages/Showlessapp";
import Allapps from "../pages/Allapps";
import Apps from "../pages/Apps";
import Appdetails from "../pages/Appdetails";
import Installation from "../pages/Installation";
import errorimg from "../assets/error-404.png";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/apps", element: <Apps /> },

      {
        path: "/apps/:id",
        element: <Appdetails></Appdetails>,
      },
      { path: "/installation", element: <Installation /> },

      {
        path: "*",
        element: (
          <div className="flex flex-col items-center justify-center py-10">
            <img src={errorimg} alt="" srcset="" />
            <p className="text-gray-500 mt-7 text-lg">No Result Founded</p>
          </div>
        ),
      },
    ],
  },
]);
