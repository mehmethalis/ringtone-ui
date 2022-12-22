import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TeamOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Logo from "../shared/logo";
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
  getItem(<Link to="/">Home</Link>, "1", <DashboardOutlined />),
  getItem(<Link to="/profile">Profile</Link>, "2", <TeamOutlined />),
];
export default function DefaultSider({ handleBread, bread }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="brand">
        <a href="/">
          <Logo isSmall={collapsed}/>
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
