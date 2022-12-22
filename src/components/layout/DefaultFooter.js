import { Layout } from "antd";
const { Footer } = Layout;

export default function DefaultFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <a href="https://sellerquick.com" target={"_blank"} rel="noreferrer">
        SellerQuick{" "}
      </a>
      &#169;
      {" " + new Date().getFullYear()} Tüm hakları saklıdır.
    </Footer>
  );
}
