import React from "react";
import { Row, Col } from "antd";
import locale from "antd/es/date-picker/locale/tr_TR";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { changeStatisticDate } from "../../store/actions/statistic.actions";

export default function Navbar() {
  const dispatch = useDispatch();
  const onChange = (date, dateString) => {
    const [year, month] = dateString.split("-");
    dispatch(changeStatisticDate({ year, month }));
  };
  const date = new Date();

  return (
    <div className="navbar">
      <Row gutter={16} align={"top"}>
        <Col>
          <DatePicker
            onChange={onChange}
            picker="month"
            size="large"
            locale={locale}
            placeholder="Lütfen ay seçin"
            defaultValue={dayjs(date.getFullYear() + "-" + (date.getMonth() + 1), "YYYY-MM")}
          />
        </Col>
      </Row>
    </div>
  );
}
