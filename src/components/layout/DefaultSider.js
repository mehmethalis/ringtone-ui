import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TeamOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/">Anasayfa</Link>, "1", <DashboardOutlined />),
  getItem(<Link to="/profile">Profilim</Link>, "2", <TeamOutlined />),
];
export default function DefaultSider({ handleBread, bread }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="brand">
        <a href="/">
          {/* <img src={logo} width={collapsed ? 50 : 90} alt="sellerquick logo" /> */}
          logo gelcek
        </a>
      </div>

      <Menu
        theme="dark"
        defaultSelectedKeys={[bread]}
        mode="inline"
        items={items}
        onSelect={(item) => handleBread(item.key)}
      />
    </Sider>
  );
}
