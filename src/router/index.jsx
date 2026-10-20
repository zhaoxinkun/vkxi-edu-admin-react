import BasicLayout from "@/layout/basicLayout/index.jsx";
import Dashboard from "@/pages/Dashboard/index.jsx";
import Login from "@/pages/login/index.jsx";
import { createBrowserRouter } from "react-router";

// 路由数据
// const routeConfig = [
//   {
//     path: "/login",
//     component: Login,
//   },
//   {
//     path: "/",
//     component: Home,
//   },
// ];

// 遍历生成路由对象
// const routes = routeConfig.map((route) => {
//   const Page = route.component;
//
//   return {
//     path: route.path,
//     element: <Page/>,
//   };
// });

const routes = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

// 创建路由实例
const router = createBrowserRouter(routes);

export default router;
