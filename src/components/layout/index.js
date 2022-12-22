import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb, Layout, theme } from "antd";
import "./layout.css";
import "moment/locale/tr";
import DefaultSider from "./DefaultSider";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
const { Content } = Layout;

export default function DefaultLayout({ children }) {
  const location = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getSelectedKey = () => {
    const path = location.pathname;
    if (path.includes("profile")) return "2";

    return "1";
  };

  const [bread, setBread] = useState(getSelectedKey());

  const handleBread = (key) => setBread(key);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <DefaultSider handleBread={handleBread} bread={bread} />
      <Layout className="site-layout">
        <DefaultHeader bread={bread} />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            {bread === "1" && <Breadcrumb.Item>/ Home</Breadcrumb.Item>}
            {bread === "2" && <Breadcrumb.Item>/ Profile</Breadcrumb.Item>}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <DefaultFooter />
      </Layout>
    </Layout>
  );
}
