import React from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentF = () => {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <>
                    <h3>User context value {user}</h3>
                    <h4>Channel contex value {channel}</h4>
                  </>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default ComponentF;
