import { Avatar, Card, Row, Col, Badge } from "antd";
import React from "react";
import "./profile.css";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import SongsList from "../shared/songsList";
import { useSelector } from "react-redux";

const { Meta } = Card;

export default function Profile() {
  const { username, userRingtones } = useSelector((state) => state.userState);

  return (
    <div className="site-statistic-demo-card">
      <Row>
        <Col span={8}>
          <Card
            style={{
              width: 300,
              height: 150,
            }}
            actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />]}
          >
            <Meta
              avatar={
                <Avatar
                  style={{ backgroundColor: "#7265e6", verticalAlign: "middle" }}
                  size={60}
                  gap={4}
                >
                  {username}
                </Avatar>
              }
              title="John Doe"
              description={
                <span>
                  <sm style={{ fontSize: "10px" }}>Downloadable</sm>{" "}
                  <Badge color="#7265e6" size="medium" count={userRingtones ? "+" + userRingtones.length : "0"} />
                </span>
              }
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
