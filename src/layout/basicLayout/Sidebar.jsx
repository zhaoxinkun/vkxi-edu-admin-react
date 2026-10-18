import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const menus = [
  getItem("Option 1", "1", <PieChartOutlined/>),
  getItem("Option 2", "2", <DesktopOutlined/>),
  getItem("User", "sub1", <UserOutlined/>, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined/>, [getItem("Team 1", "6"), getItem("Team 2", "8")]),
  getItem("Files", "9", <FileOutlined/>),
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      {/*侧边导航*/}
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical"/>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={menus}/>
      </Sider>
    </>
  );
}
