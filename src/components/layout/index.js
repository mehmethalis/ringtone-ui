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
    if (path.includes("customer")) return "2";
    if (path.includes("plans")) return "3";
    if (path.includes("credits")) return "4";
    if (path.includes("promotions")) return "5";

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
            {bread === "1" && <Breadcrumb.Item>/Anasayfa</Breadcrumb.Item>}
            {bread === "2" && <Breadcrumb.Item>/Müşteriler</Breadcrumb.Item>}
            {bread === "3" && <Breadcrumb.Item>/Planlar</Breadcrumb.Item>}
            {bread === "4" && <Breadcrumb.Item>/Krediler</Breadcrumb.Item>}
            {bread === "5" && <Breadcrumb.Item>/Promosyonlar</Breadcrumb.Item>}
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
