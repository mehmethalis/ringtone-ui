import React from "react";
import { Layout, Button, Card } from "antd";
const { Footer } = Layout;

export default function DrawerFooter() {
  return (
    <Footer
      style={{
        textAlign: "start",
        display: "flex",
        gap: "15rem",
      }}
    >
      <Card style={{width: 200, height:40}}>Total Price $
      
      </Card>
      <Button type={"default"} size={"large"}>
        Pay
      </Button>
      
    </Footer>
  );
}
