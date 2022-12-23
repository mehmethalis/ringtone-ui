import React from "react";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <Row gutter={16} align={"top"}>
        <Col></Col>
      </Row>
    </div>
  );
}
