import { App } from "antd";
import { useEffect } from "react";

let message;

export default function MessagesBridge() {
  const { message: messageInstance } = App.useApp();

  useEffect(() => {
    message = messageInstance;
  }, [messageInstance]);

  return null;
}

// oxlint-disable-next-line react/only-export-components -- 同时导出桥接组件和供 Axios 使用的消息实例。
export { message };
