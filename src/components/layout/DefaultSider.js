import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
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

export default function DefaultSider({ handleBread, bread }) {
  const location = useLocation();
  const [key, setKey] = useState(location.pathname.includes("profile") ? "2" : "1");
  useEffect(() => {
    setKey(location.pathname.includes("profile") ? "2" : "1");
  }, [location.pathname]);

  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem(<Link to="/">Home</Link>, "1", collapsed ? <HomeOutlined /> : <div></div>),
    getItem(<Link to="/profile">Profile</Link>, "2", collapsed ? <UserOutlined /> : <div></div>),
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="brand">
        <a href="/">
          <Logo isSmall={collapsed} />
        </a>
      </div>

      <Menu
        theme="dark"
        defaultSelectedKeys={[key]}
        selectedKeys={[key]}
        mode="inline"
        items={items}
        onSelect={(item) => handleBread(item.key)}
      />
    </Sider>
  );
}
