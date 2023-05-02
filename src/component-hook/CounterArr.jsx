import React, { useState } from "react";

const CounterArr = () => {
  const [items, setItems] = useState([]);
  const addList = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <>
      <button onClick={addList}>Add a list</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
};

export default CounterArr;
