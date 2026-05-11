import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
//import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import WorkExperience from "./pages/WorkExperience";
import NotFound from "./pages/NotFound";
import RootLayout from "./pages/RootLayout";
import Recruiter from "./pages/Recruiter";
import Techie from "./pages/Techie";
import Philosopher from "./pages/Philosopher";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "About",
        element: <AboutMe />,
      },
      {
        path: "Exp",
        element: <WorkExperience />,
      },
      {
        path: "Recruiter",
        element: <Recruiter />,
      },
      {
        path: "Techie",
        element: <Techie />,
      },
      {
        path: "Philosopher",
        element: <Philosopher />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
