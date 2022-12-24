import { Avatar, Card, Row, Col } from "antd";
import React from "react";
import "./profile.css";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import SongsList from "../shared/songsList";
const { Meta } = Card;

export default function Profile() {
  return (
    <div className="site-statistic-demo-card">
      <Row>
        <Col span={8}>
          <Card
            style={{
              width: 300,
              height: 150,
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
        </Col>
        <Col span={16}>
          <SongsList isDownload={true} />
        </Col>
      </Row>
    </div>
  );
}
