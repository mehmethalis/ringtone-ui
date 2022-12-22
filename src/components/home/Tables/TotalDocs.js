import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Döküman Tipi",
    dataIndex: "plan",
  },
  {
    title: "Toplam Sayı",
    dataIndex: "amount",
  },
];
const data = [
  {
    key: "1",
    plan: <b>Alış Faturası</b>,
    amount: <b>1</b>,
  },
  {
    key: "2",
    plan: <b>Satış Faturası</b>,
    amount: <b>3</b>,
  },
  {
    key: "3",
    plan: <b>İade Faturası</b>,
    amount: <b>1</b>,
  },
  {
    key: "4",
    plan: <b>Rapor</b>,
    amount: <b>2</b>,
  },
];

export default function TotalDocs() {
  return <Table columns={columns} dataSource={data} pagination={false} />;
}
