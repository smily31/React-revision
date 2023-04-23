import React from "react";

// creating a context
const UserContext = React.createContext('Codevolution')    // here you are passing default context value

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

// to use context type property we need to export UserContext
export default UserContext