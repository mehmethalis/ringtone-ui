import { Row } from "antd";
import React from "react";
import "./profile.css";
import Navbar from "./Navbar";

export default function Profile() {
  return (
    <div className="site-statistic-demo-card">
      <Navbar />
      <Row gutter={16} justify="space-between" align={"middle"}>
        profile
      </Row>
    </div>
  );
}
