import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/ErrorPage";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Body = lazy(() => import("./src/components/Body"));
const About = lazy(() => import("./src/components/About"));
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div></div>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div></div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurantMenu/:resId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
