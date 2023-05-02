import React, { useState } from "react";

const CounterObj = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <form>
        {/* <input type='text' value={name.firstName} onChange={e => setName({firstName: e.target.value})}/> */}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        {/* Merge the value of object , using spread operator , we first copy the value then return or show it */}
      </form>
      <h2>First Name is : {name.firstName} </h2>
      <h2>Last Name is : {name.lastName} </h2>
      {JSON.stringify(name)}
    </>
  );
};

export default CounterObj;
