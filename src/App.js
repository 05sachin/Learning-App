
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./components/courses/Courses";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/details/Details";
import Learn from "./components/learn/Learn";
import Chapter from "./components/chapter/Chapter";
import Page404 from "./components/Page404/Page404";
import React from "react";
import ReactDOM from "react-dom/client"

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <Page404 />,
    children: [
      { 
        path: "/", 
        element: <Hero />
      },
      {
        path: "/courses",
        children: [
          { 
            index: true, 
            element: <Courses /> 
          },
          { 
            path: ":courseId", 
            element: <Details /> 
          },
        ],
      },
      {
        path: "/learn/:courseId",
        element: <Learn />,
        children: [
          { 
            path: "chapter/:chapterId", 
            element: <Chapter /> 
          }
        ],
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={browserRouter} />);