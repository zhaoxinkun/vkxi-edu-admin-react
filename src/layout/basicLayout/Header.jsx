import React from "react";
import { theme } from "antd";
import { Layout } from "antd";

const { Header: AntdHeader } = Layout;

export default function Header() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <AntdHeader styles={colorBgContainer}
                  className="flex justify-between p-1">
        <div>你好</div>
        <div>你坏</div>
      </AntdHeader>
    </>
  );
}
