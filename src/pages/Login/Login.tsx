import React from "react";
import "./login.css";
import Grid from "./Grid/Grid";
import LoginForm from "../../components/Login/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="triangle"></div>
      <div className="triangle-up"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="imgLB"></div>
      <div className="grid">
        <Grid></Grid>
      </div>
      <div className="loginForm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
