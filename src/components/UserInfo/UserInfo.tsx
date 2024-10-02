import React from "react";
import "./UserInfo.css";
import avt from "../../assets/images/UserInfo/avata.png";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <span className="Avt">
        <img src={avt} alt="" className="AvtImg" />
      </span>
      <span className="userID">User ID</span>
      <span className="userArrow"></span>
    </div>
  );
};

export default UserInfo;
