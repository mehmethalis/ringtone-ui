import React, {useState} from "react";
import {
  UserOutlined,
  LogoutOutlined,
  CrownFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Avatar, Popover, Badge, theme, Drawer } from "antd";
import moment from "moment";
import "./layout.css";
import "moment/locale/tr";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRequest } from "../../store/actions/user.actions";
const { Header } = Layout;

export default function DefaultHeader({ bread }) {
  const [open, setOpen] = useState(false);
  const { profile } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: "0px 15px ",
        background: colorBgContainer,
      }}
    >
      <div className="header-right">
        <Badge count={5} offset={[-12, 12]} size="small">
          <Avatar
            onClick={showDrawer}
            size={50}
            style={{ color: "#002140", backgroundColor: "white"}}
            icon={<ShoppingCartOutlined />}
            className="avatar"
          />
          <Drawer width={520} closable={false} onClose={onClose} open={open}>
            
          </Drawer>
        </Badge>

        <Popover
          content={
            <div>
              <a
                href="javascript;"
                onClick={() => dispatch(userLogoutRequest())}
              >
                <LogoutOutlined style={{ paddingRight: "5px" }} />
                Log Out
              </a>
            </div>
          }
          title={
            <div>
              <CrownFilled style={{ fontSize: "20px", color: "#ffce3d" }} />{" "}
              Admin
              <p>
                <small>{profile.email}</small>
              </p>
            </div>
          }
          trigger="click"
          placement="bottomRight"
        >
          <Avatar
            size={"default"}
            style={{ backgroundColor: "#002140" }}
            icon={<UserOutlined />}
            className="avatar"
          />
        </Popover>
      </div>
    </Header>
  );
}
