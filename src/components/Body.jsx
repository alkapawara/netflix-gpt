import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
    
      <RouterProvider router={routes} />
    </>
  );
};

export default Body;
