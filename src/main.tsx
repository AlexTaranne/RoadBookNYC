import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Alex from "./pages/Alex";
import Homepage from "./pages/Homepage";
import Taupe from "./pages/Taupe";
import Leon from "./pages/Leon";
import Emma from "./pages/Emma";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/taupe",
        element: <Taupe />,
      },
      {
        path: "/leon",
        element: <Leon />,
      },
      {
        path: "/emma",
        element: <Emma />,
      },
      {
        path: "/alex",
        element: <Alex />,
      },
      {
        path: "/day1",
        element: <Day1 />,
      },
      {
        path: "/day2",
        element: <Day2 />,
      },
      {
        path: "/day3",
        element: <Day3 />,
      },
      {
        path: "/day4",
        element: <Day4 />,
      },
      {
        path: "/day5",
        element: <Day5 />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
