import { Avatar, Card, Row, Col, Badge } from "antd";
import React from "react";
import "./profile.css";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import SongsList from "../shared/songsList";
import { useSelector } from "react-redux";

const { Meta } = Card;

export default function Profile() {
  const { username, userRingtones, isLoading } = useSelector((state) => state.userState);

  return (
    <div className="site-statistic-demo-card">
      <Row justify={"center"} align={"top"}>
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
                  <span style={{ fontSize: "10px",padding:"3px" }}>Downloadable</span>
                  <Badge
                    color="#7265e6"
                    size="medium"
                    count={userRingtones ? "+" + userRingtones.length : "0"}
                  />
                </span>
              }
            />
          </Card>
        </Col>
        <Col span={16}>
          <SongsList
            songs={userRingtones}
            isLoading={isLoading}
            isDownload={true}
            isPreview={false}
          />
        </Col>
      </Row>
    </div>
  );
}
