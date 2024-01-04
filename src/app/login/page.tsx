import React from "react";
import classes from "./login.module.css";
import LoginComponent from "@/components/login/login";

function Login({ setLogin, login }: any) {
  return (
    <div className={classes.login}>
      <LoginComponent setLogin={setLogin} login={login} />
    </div>
  );
}

export default Login;
