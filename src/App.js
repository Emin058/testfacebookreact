import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import Router from "./components/router/Router";
import { useState } from "react";
import { auth } from "./utils/userAuth";

auth()


function App() {
  const isAuth = useSelector(state => state.user.isAuth);

  
  return !isAuth ? <Login /> : <Router />
}

export default App;
