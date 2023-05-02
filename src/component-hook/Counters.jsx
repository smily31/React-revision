import React, { useState } from "react";

const Counters = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) setCount((prevCount) => prevCount + 1);
    // setCount(count+1)          //  to access previous state you must pass function having previous value that returns new value
  };
  return (
    <>
      Count {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* <button onClick={() => setCount(count+1)}>Increment by 1</button> */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment by 1
      </button>
      {/* <button onClick={() => setCount(count-1)}>Decrement by 1</button> */}
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement by 1
      </button>
      <button onClick={incrementFive}>Increment by 5</button>
    </>
  );
};

export default Counters;
