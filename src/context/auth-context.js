import React from "react";

const authContext = React.createContext({
   isAuth: false,
   login: () => {}
});

export default authContext;