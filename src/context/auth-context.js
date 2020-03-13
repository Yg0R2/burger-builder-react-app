import React from "react";

// Initialize with default value
const AuthContext = React.createContext({
  isAuthenticated: false,
  loginFunction: () => {}
});

export default AuthContext;
