import "./App.css";
import { RouterProvider } from "react-router";
import router from "./router/index.jsx";

function App() {
  return (
    // 路由
    <RouterProvider router={router}/>
  );
}

export default App;
