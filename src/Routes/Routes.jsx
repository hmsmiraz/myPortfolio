import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Skills from "../Components/Skills/Skills";
import Education from "../Components/Education/Education";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
