
import React, { lazy } from "react";
const Home = lazy(() => import("../views/Home"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page301 = lazy(() => import("../views/page301"))

// Navigate重定向组件
import { Navigate } from "react-router-dom";

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
)


const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />
  }, {
    path: "/",
    element: <Home />,
    children: [{
      path: "/page1",
      element: withLoadingComponent(<Page1 />)
    }, {
      path: "/page2",
      element: withLoadingComponent(<Page2 />)
    },
    {
      path: "/page3/page301",
      element: withLoadingComponent(<Page301 />)
    }]
  }, {
    path: "*",
    element: <Navigate to="/page1" />
  }
]

export default routes