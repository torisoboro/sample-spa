import React, { useEffect, useState } from "react";
import { fetchUser } from "../api/fakeApi";

import { Loading } from "../component/loading";

export const User = () => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetchUser().then((r) => setDatas(r));
  }, []);

  return (
    <>
      <div>
        <h2>User</h2>
      </div>
      {datas === null ? <Loading /> : <List datas={datas} />}
    </>
  );
};

const List = ({ datas, ...props }) => {
  return (
    <ul>
      {datas.map((data) => (
        <li key={data.id}>
          {data.id} {data.name}
        </li>
      ))}
    </ul>
  );
};
