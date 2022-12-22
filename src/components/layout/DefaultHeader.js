import React from "react";
import { UserOutlined, LogoutOutlined, CrownFilled } from "@ant-design/icons";
import { Layout, Avatar, Popover, Badge, theme } from "antd";
import moment from "moment";
import "./layout.css";
import "moment/locale/tr";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRequest } from "../../store/actions/user.actions";
const { Header } = Layout;

export default function DefaultHeader({ bread }) {
  const { profile } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
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
      

      {bread !== "1" && (
        <>
          <span>
            Kayıtlı Kullanıcı : <Badge count={true ? "+10" : 0} showZero color="#52c41a" />
          </span>
        </>
      )}

      <div className="header-right">
        <Popover
          content={
            <div>
              <a href="javascript;" onClick={() => dispatch(userLogoutRequest())}>
                <LogoutOutlined style={{ paddingRight: "5px" }} />
                Çıkış Yap
              </a>
            </div>
          }
          title={
            <div>
              <CrownFilled style={{ fontSize: "20px", color: "#ffce3d" }} /> Admin
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
