import React from "react";
import { Row, Col } from "antd";
import SongsList from "./SongsList";

export default function Navbar() {
  return (
    <div className="navbar">
      <Row gutter={16} align={"top"}>
        <Col></Col> 
      </Row>
      <SongsList/>
    </div>
  );
}
