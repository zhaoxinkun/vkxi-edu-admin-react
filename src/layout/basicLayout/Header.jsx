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
      <AntdHeader style={{ padding: 0, background: colorBgContainer, backgroundColor: "red" }}/>
    </>
  );
}
