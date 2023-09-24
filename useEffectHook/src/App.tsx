import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

export enum LoginStatus {
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
}

function App() {
  useEffect(() => {
    const userLoginInformation = localStorage.getItem("isLoggedIn");

    if (userLoginInformation === LoginStatus.LOGGED_IN) {
      setIsLoggedIn(true);
    }
  }, []); // If useEffect has no dependencies it will only run once on first render of element

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // LocalStorage persists indefinitely in browser storage until cache cleared.
    localStorage.setItem("isLoggedIn", LoginStatus.LOGGED_IN);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", LoginStatus.LOGGED_OUT);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
