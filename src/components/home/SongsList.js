import React, { useEffect, useState } from "react";
import { Avatar, List, Button } from "antd";
import {
  DownloadOutlined,
  ShoppingOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import Logo from "../shared/logo";
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;
export default function SongsList() {
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };
  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={Logo} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div className="buttons">
              <Button icon={<PlayCircleOutlined />} />
              <Button
                shape="circle"
                icon={<DownloadOutlined />}
                size={"default"}
              />
              <Button icon={<ShoppingOutlined />} />
            </div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
}
