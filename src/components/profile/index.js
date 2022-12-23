import { Avatar, Card } from "antd";
import React from "react";
import "./profile.css";
import Navbar from "./Navbar";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

export default function Profile() {
  return (
    <div className="site-statistic-demo-card">
      <Navbar />
      <Card
        style={{
          width: 300,
          height: 150
        }}
        
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Name Surname"
          description="username"
        />
      </Card>
    </div>
  );
}
