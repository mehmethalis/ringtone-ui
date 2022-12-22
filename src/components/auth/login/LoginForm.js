import React from "react";
import Logo from "../../shared/logo";
import { useDispatch, useSelector } from "react-redux";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { userLoginRequest } from "../../../store/actions/user.actions";

export default function LoginForm() {
  const { isLoading } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(userLoginRequest({ email: values.email, password: values.password }));
  };
  return (
    <div className="form-login">
      <a href="/">
        <Logo></Logo>
      </a>
      <h3 className="heading">Giriş Yap</h3>
      <Form
        name="normal_login"
        size="middle"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, type: "email", message: "Geçerli bir e-posta adresi girin!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="E-Posta"
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Şifrenizi girin!" }]}>
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Şifre"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          size="middle"
          className="btn-login"
          loading={isLoading}
        >
          Giriş Yap
        </Button>
      </Form>
    </div>
  );
}
