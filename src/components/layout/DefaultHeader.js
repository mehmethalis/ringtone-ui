import React, { useState } from "react";
import {
  UserOutlined,
  LogoutOutlined,
  CrownFilled,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Layout, Avatar, Popover, Badge, theme, Drawer, Button } from "antd";
import "./layout.css";
import "moment/locale/tr";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRequest } from "../../store/actions/user.actions";
import DrawerFooter from "./drawer/DrawerFooter";
<<<<<<< HEAD
import DrawerBody from "./drawer/DrawerBody";
=======
import Player from "../shared/player";
>>>>>>> 6c63427718b140c79767b43cece503d436458040
const { Header } = Layout;

export default function DefaultHeader({ bread }) {
  const [open, setOpen] = useState(false);
  const { username } = useSelector((state) => state.userState);
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
      <div className="player-container">
        <Player />
      </div>
      <div className="header-right">
        <Badge count={5} offset={[-8, 8]} size="small" style={{marginRight:"15px"}}>
          <Avatar
            onClick={showDrawer}
            size={"large"}
            style={{ color: "#002140", backgroundColor: "white",fontSize:"30px",marginRight:"15px" }}
            icon={<ShoppingCartOutlined />}
            className="avatar"
          />
          <Drawer
            title={"Shopping Cart"}
            width={520}
<<<<<<< HEAD
            closable={true}
            onClose={onClose}
            open={open}
            closeIcon={<CloseOutlined />}
            footer={<DrawerFooter/>}
          >
            <DrawerBody />
=======
            closable={false}
            onClose={onClose}
            open={open}
          >
            <DrawerFooter />
>>>>>>> 6c63427718b140c79767b43cece503d436458040
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
              {username}
            </div>
          }
          trigger="click"
          placement="bottomRight"
        >
          <Avatar
            size={"medium"}
            style={{ backgroundColor: "#002140" }}
            icon={<UserOutlined />}
            className="avatar"
          />
        </Popover>
      </div>
    </Header>
  );
}
