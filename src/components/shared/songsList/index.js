import React from "react";
import { List, Button } from "antd";
import {
  DownloadOutlined,
  ShoppingOutlined,
  PlayCircleOutlined,
  FieldTimeOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import Logo from "../logo";
import "./songslist.css";
import { useDispatch } from "react-redux";
import { selectSong } from "../../../store/actions/player.action";

export default function SongsList({ isDownload, songs, isLoading, isPreview }) {
  const dispatch = useDispatch();
  return (
    <List loading={isLoading}>
      <VirtualList data={songs} itemHeight={47} itemKey={"id"}>
        {(item) => (
          <List.Item key={item.id} style={{ padding: "15px" }}>
            <List.Item.Meta
              avatar={<Logo isSmall={true} />}
              title={item.title}
              description={
                <div>
                  <span>
                    <FieldTimeOutlined
                      style={{ fontSize: "18px", padding: "3px", color: "#0f172a" }}
                    />
                    {item.duration}
                  </span>
                  <span style={{ color: `${item.isCopyright ? "#0f172a" : "#059669"}` }}>
                    <CopyrightOutlined
                      style={{
                        fontSize: "16px",
                        padding: "3px",
                        marginLeft: "15px",
                      }}
                    />
                    {item.isCopyright ? "has copyright" : "no copyright"}
                  </span>
                </div>
              }
            />
            <div className="buttons">
              <Button
                icon={<PlayCircleOutlined />}
                onClick={() =>
                  dispatch(
                    selectSong({ selectedSong: item, songType: isPreview ? "isPreview" : "full" })
                  )
                }
              />
              {isDownload && <Button shape="circle" icon={<DownloadOutlined />} size={"default"} />}
              <Button icon={<ShoppingOutlined />} />
            </div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
}
