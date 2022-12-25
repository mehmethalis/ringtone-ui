import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import { Col, Row } from "antd";
import "./player.css";
import CDIcon from "../../../assets/images/cd.png";
import { useSelector } from "react-redux";
import Bell from "../bell";

export default function Player() {
  const { selectedSong, songType } = useSelector((state) => state.playerState);

  const [soundFile, setSoundFile] = useState(null);

  useEffect(() => {
    async function importFile() {
      const file =
        songType === "isPreview"
          ? await require(`../../../assets/ringtones/ringtones_short/${selectedSong.fileName}`)
          : await require(`../../../assets/ringtones/ringtones_long/${selectedSong.fileName}`);

      setSoundFile(file);
    }
    if (selectedSong) {
      importFile();
    }
  }, [selectedSong, songType]);

  return (
    <div className="player">
      <Row justify={"center"}>
        <Col span={4}>
          <div className="cover">
            <p className="caption">
              {selectedSong && selectedSong.title ? selectedSong.title : ""}
            </p>
          </div>
        </Col>
        <Col span={20}>
          <AudioPlayer autoPlay src={soundFile} />
        </Col>
      </Row>
    </div>
  );
}
