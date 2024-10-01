import React from "react";
import Header from "./Header/Header";
import Sider from "./Sider/Sider";

const mainLayout = ({ children }: any) => {
  return (
    <div>
      <Header></Header>
      <div>
        <Sider></Sider>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default mainLayout;
