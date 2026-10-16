import Login from "../login/index.jsx";
import Home from "../pages/Home.jsx";
import { createBrowserRouter } from "react-router";


const routeConfig = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];


const routes = routeConfig.map((route) => {
  const Page = route.component;

  return {
    path: route.path,
    element: <Page/>,
  };
});

const router = createBrowserRouter(routes);

export default router;
