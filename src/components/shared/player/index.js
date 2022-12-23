import React from "react";
import AudioPlayer from "react-h5-audio-player";
import { Col, Row } from "antd";
import "./player.css";
import CDIcon from "../../../assets/images/cd.png";
import Sarkı from "../../../assets/ringtones/ringones_short/bird_chirp_short.mp3";

export default function Player() {
  return (
    <div className="player">
      <Row justify={"center"}>
        <Col span={4}>
          <div className="cover">
            <img src={CDIcon} alt="cd icon" width={30} />
            <p className="caption">Şarkı 1</p>
          </div>
        </Col>
        <Col span={20}>
          <AudioPlayer
            autoPlay
            src={Sarkı}
            onPlay={(e) => console.log("onPlay")}
            // other props here
          />
        </Col>
      </Row>
    </div>
  );
}
