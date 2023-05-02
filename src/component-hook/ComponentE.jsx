import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { ChannelContext, UserContext } from "../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      {user} - {channel}
      <ComponentF />
    </>
  );
};

export default ComponentE;
