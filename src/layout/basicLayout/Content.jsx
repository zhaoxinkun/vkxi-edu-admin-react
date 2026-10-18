import { Layout } from "antd";
import { Outlet } from "react-router";

const { Content: AntdContent } = Layout;

export default function Content() {
  return (
    <AntdContent style={{ backgroundColor: "blue" }}>
      <Outlet/>
    </AntdContent>
  );
}
