import React, { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { LoginStatus } from "../components/Login/interfaces/LoginStatus";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email: string, password: string) => {},
});

export const AuthContextProvider = (props: HTMLAttributes<ReactNode>) => {
  useEffect(() => {
    const userLoginInformation = localStorage.getItem("isLoggedIn");

    if (userLoginInformation === LoginStatus.LOGGED_IN) {
      setIsLoggedIn(true);
    }
  }, []); // If useEffect has no dependencies it will only run once on first render of element

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    // LocalStorage persists indefinitely in browser storage until cache cleared.
    localStorage.setItem("isLoggedIn", LoginStatus.LOGGED_OUT);
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", LoginStatus.LOGGED_IN);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
