import React from "react";
import "./Header.css";
import LanguageMenu from "../../components/LangugeMenu/LanguageMenu";
import BellIcon from "../../icons/BellIcon";
import UserInfo from "../../components/UserInfo/UserInfo";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="headerRight">
        <div className="headerLanguage">
          <LanguageMenu></LanguageMenu>
        </div>
        <div className="headerBellIcon">
          <div className="bellicon">
            <BellIcon></BellIcon>
          </div>
          <span className="notification-count">2</span>
        </div>
        <div className="headerInfo">
          <UserInfo></UserInfo>
        </div>
      </div>
    </div>
  );
};

export default Header;
