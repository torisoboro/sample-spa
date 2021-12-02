import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fakeApi";

import { Loading } from "../component/loading";

export const Dashboard = () => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetchData().then((r) => setDatas(r));
  }, []);

  return (
    <>
      <div>
        <h2>Dashboard</h2>
      </div>
      {datas === null ? <Loading /> : <List datas={datas} />}
    </>
  );
};

const List = ({ datas, ...props }) => {
  return (
    <ul>
      {datas.map((data) => (
        <li key={data.id}>{data.text}</li>
      ))}
    </ul>
  );
};
