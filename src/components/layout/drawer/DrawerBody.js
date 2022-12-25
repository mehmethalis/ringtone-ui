import React from "react";
import { List, Skeleton, Card, Button } from "antd";
import Bell from "../../shared/bell/index";
import { FieldTimeOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../store/actions/user.actions";

export default function DrawerBody() {
  const {
    basket: { items },
  } = useSelector((state) => state.userState);

  const dispatch = useDispatch();
  return (
    <div style={{ height: "50vh" }}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item) => (
          <Card style={{ marginBottom: 20 }} key={item.title}>
            <List.Item
              actions={[
                <Button
                  danger
                  onClick={() => dispatch(removeItem(item))}
                  shape="circle"
                  icon={<CloseOutlined style={{ fontSize: "13px", padding: "2px" }} />}
                />,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={
                    <div style={{ marginTop: "15px", paddingRight: "15px" }}>
                      <Bell isSmall={true} />
                    </div>
                  }
                  title={
                    <div style={{ marginTop: "8px" }}>
                      <b>{item.title}</b>
                      <p>
                        <FieldTimeOutlined /> {"  "}
                        {item.duration.toFixed(2) + " min"}
                      </p>
                    </div>
                  }
                />
                <div style={{ fontSize: "20px" }}>
                  <b>$ {item.price}</b>
                </div>
              </Skeleton>
            </List.Item>
          </Card>
        )}
      />
    </div>
  );
}
