import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { pay } from "../../../store/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export default function DrawerFooter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    basket: { items },
  } = useSelector((state) => state.userState);

  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let total = 0;

    items.map((item) => (total += item.price));
    setTotal(total.toFixed(2));
  }, [items]);

  const handlePay = () => {
    setLoading(true);
    let ids = items.map((item) => item.id);
    dispatch(pay(ids));
    setLoading(false);
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="footer">
      <div className="price">
        TOTAL : <b>$ {total}</b>
      </div>

      <div>
        <Button
          type="primary"
          icon={<CreditCardOutlined />}
          onClick={() => handlePay()}
          style={{ padding: "8px 35px" }}
          disabled={items.length <= 0}
          size={"large"}
          loading={loading}
        >
          Pay Now!
        </Button>
      </div>
    </div>
  );
}
