export const fetchUser = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "0001",
            name: "マネーフォワード太郎"
          },
          {
            id: "0002",
            name: "マネーフォワード二郎"
          }
        ]);
      }, 1000);
    });
  };
  
  export const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 0,
            text: "データ1"
          },
          {
            id: 1,
            text: "データ2"
          },
          {
            id: 2,
            text: "データ3"
          }
        ]);
      }, 2000);
    });
  };
  