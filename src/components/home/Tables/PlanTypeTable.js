import React from "react";
import { Table, Tag} from "antd";
const columns = [
  {
    title: "Plan Türü",
    dataIndex: "plan",
  },
  {
    title: "Plan sayısı",
    dataIndex: "amount",
  },
];
const data = [
  {
    key: "1",
    plan: (
      <Tag color="magenta">
        <b>Bireysel</b>
      </Tag>
    ),
    amount: <b>1</b>,
  },
  {
    key: "2",
    plan: (
      <Tag color="volcano">
        <b>Bireysel+</b>
      </Tag>
    ),
    amount: <b>3</b>,
  },
  {
    key: "3",
    plan: (
      <Tag color="purple">
        <b>Kurumsal</b>
      </Tag>
    ),
    amount: <b>1</b>,
  },
  {
    key: "4",
    plan: (
      <Tag color="geekblue">
        <b>Kurumsal+</b>
      </Tag>
    ),
    amount: <b>2</b>,
  },
];

export default function PlanTypeTable() {
  return <Table columns={columns} dataSource={data} pagination={false} />;
}
