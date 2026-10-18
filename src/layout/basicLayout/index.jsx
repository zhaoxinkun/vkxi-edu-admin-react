import "./index.css";
import { Layout } from "antd";
import Sidebar from "@/layout/basicLayout/Sidebar.jsx";
import Header from "@/layout/basicLayout/Header.jsx";
import Content from "@/layout/basicLayout/Content.jsx";

export default function BasicLayout() {
  return (
    <>
      {/*布局*/}
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar/>
        <Layout>
          <Header/>
          <Content/>
        </Layout>
      </Layout>
    </>
  );
}
