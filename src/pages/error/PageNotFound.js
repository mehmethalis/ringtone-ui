import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Üzgünüz, böyle bir sayfa yok."
      extra={
        <Link to={"/"}>
          <Button type="primary">Anasayfaya alalım sizi!</Button>
        </Link>
      }
    />
  );
}
