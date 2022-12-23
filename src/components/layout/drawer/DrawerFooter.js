import React from "react";
import { Layout, Button } from "antd";
const { Footer } = Layout;

export default function DrawerFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <Button>Continue to checkout</Button>
    </Footer>
  );
}
