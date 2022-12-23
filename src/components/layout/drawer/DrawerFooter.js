import React from "react";
import { Layout, Button } from "antd";
const { Footer } = Layout;

export default function DrawerFooter() {
  return (
    <Footer
      style={{
        textAlign: "end",
      }}
    >
      <Button ghost type={"primary"} size={"large"}>
        Continue To Checkout
      </Button>
    </Footer>
  );
}
