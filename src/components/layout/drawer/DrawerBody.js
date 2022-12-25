import React, { useEffect, useState } from "react";
import { List, Skeleton, Card } from "antd";
import Bell from "../../shared/bell/index";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default function DrawerBody() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      ></div>
    ) : null;
  return (
    <div>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <Card
          style={{marginBottom: 20}}
          >
            <List.Item actions={[<a key="list-loadmore-more">remove</a>]}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Bell isSmall={true} />}
                  title={<a href="https://ant.design">{item.name?.last}</a>}
                />
                <div>price</div>
              </Skeleton>
            </List.Item>
          </Card>
        )}
      />
    </div>
  );
}
