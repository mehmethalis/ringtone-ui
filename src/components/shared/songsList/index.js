import React from "react";
import { List, Button, Badge } from "antd";
import {
  DownloadOutlined,
  ShoppingOutlined,
  PlayCircleOutlined,
  FieldTimeOutlined,
  CopyrightOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import Logo from "../logo";
import "./songslist.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSong } from "../../../store/actions/player.action";
import { addItem, removeItem } from "../../../store/actions/user.actions";
import { toast } from "react-toastify";

export default function SongsList({ isDownload, songs, isLoading, isPreview }) {
  const dispatch = useDispatch();
  const {
    basket: { items },
  } = useSelector((state) => state.userState);

  const handleDownload = (item) => {
    const file = isPreview
      ? require(`../../../assets/ringtones/ringtones_short/${item.fileName}`)
      : require(`../../../assets/ringtones/ringtones_long/${item.fileName}`);

    toast.success("Zil sesiniz başarıyla indirildi!");
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = file;
    a.download = item.title + ".mp3";
    a.click();
  };

  return (
    <List loading={isLoading}>
      <VirtualList data={songs} itemHeight={47} itemKey={"id"}>
        {(item) => (
          <List.Item key={item.id} style={{ padding: "15px" }}>
            <List.Item.Meta
              avatar={<Logo isSmall={true} />}
              title={
                <div style={{ width: "260px" }}>
                  {isDownload ? (
                    <b>{item.title}</b>
                  ) : (
                    <Badge.Ribbon
                      text={<b style={{ fontSize: "17px" }}>{"$ " + item.price}</b>}
                      color="purple"
                    >
                      <b>{item.title}</b>
                    </Badge.Ribbon>
                  )}
                </div>
              }
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
              >
                Preview
              </Button>
              {isDownload && (
                <Button
                  shape="circle"
                  icon={<DownloadOutlined />}
                  size={"default"}
                  onClick={() => handleDownload(item)}
                />
              )}
              {!isDownload && (
                <Button
                  danger={items.includes(item)}
                  icon={items.includes(item) ? <LogoutOutlined /> : <ShoppingOutlined />}
                  onClick={
                    items.includes(item)
                      ? () => dispatch(removeItem(item))
                      : () => dispatch(addItem(item))
                  }
                >
                  {items.includes(item) ? "Remove" : "Add to Basket"}
                </Button>
              )}
            </div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
}
