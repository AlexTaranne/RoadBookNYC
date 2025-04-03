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
import Day6 from "./pages/Day6";
import Day7 from "./pages/Day7";
import Day8 from "./pages/Day8";
import Day9 from "./pages/Day9";
import Day10 from "./pages/Day10";

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
      {
        path: "/day6",
        element: <Day6 />,
      },
      {
        path: "/day7",
        element: <Day7 />,
      },
      {
        path: "/day8",
        element: <Day8 />,
      },
      {
        path: "/day9",
        element: <Day9 />,
      },
      {
        path: "/day10",
        element: <Day10 />,
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
