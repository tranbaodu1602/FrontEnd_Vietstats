import React from "react";
import Header from "./Header/Header";
import Sider from "./Sider/Sider";
import "./mainLayout.css";

const mainLayout = ({ children }: any) => {
  return (
    <div className="layoutContainer">
      <Header></Header>
      <div className="layoutContent">
        <Sider></Sider>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default mainLayout;
