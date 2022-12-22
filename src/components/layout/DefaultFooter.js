import { Layout } from "antd";
const { Footer } = Layout;

export default function DefaultFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <a href="/" target={"_blank"} rel="noreferrer">
        Ringtone Store{" "}
      </a>
      &#169;
      {" " + new Date().getFullYear()} Tüm hakları saklıdır.
    </Footer>
  );
}
