import "./index.css";
import { Layout } from "antd";
import Sidebar from "@/layout/basicLayout/Sidebar.jsx";
import Header from "@/layout/basicLayout/Header.jsx";
import Content from "@/layout/basicLayout/Content.jsx";

export default function BasicLayout() {
  return (
    <>
      {/*布局*/}
      <Layout className="module" style={{ minHeight: "100vh" }}>
        <Sidebar/>
        <Layout className="mr-1 ml-1">
          <Header/>
          <Content/>
        </Layout>
      </Layout>
    </>
  );
}
