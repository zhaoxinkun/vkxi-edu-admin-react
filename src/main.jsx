import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { App as AntdApp } from "antd";

// ant 全局消息
import MessagesBridge from "@/utils/messages.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AntdApp>
      <MessagesBridge/>
      <App/>
    </AntdApp>

  </StrictMode>,
);
