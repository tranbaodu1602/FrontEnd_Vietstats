import React, { useState } from "react";
import "./DashboardManage.css";
import banner from "../../assets/images/dashboard/banner.png";
import Card from "./Card/Card";
import Rectangle from "./Rectangle/Rectangle";
import LearnActivityChart from "./LearnActivityChart/LearnActivityChart";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Revenue from "./Revenue/Revenue";
import NewClass from "./NewClass/NewClass";
import Calendar from "./Calendar/Calendar";
import ChangeDay from "./ChangeDay/ChangeDay";

const DashboardManage = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handlePreviousMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };
  return (
    <div className="dashboardContainer">
      {/* Dashboard Top UI */}
      <div className="dashboardTop">
        <div className="dashboardTopLeft">
          <div className="dashboardTopLeft1">
            <img src={banner} alt="banner" className="banner" />
            <div className="bannertitle">
              <span>Hello, UserID</span>
              <span>Manage your activities in this dashboard.</span>
            </div>
          </div>
          <div className="dashboardTopLeft2">
            <Card />
          </div>
          <div className="dashboardTopLeft3">
            <div className="dashboardTopLeft3Class">
              <NewClass />
            </div>
            <div className="dashboardTopLeft3Revenue">
              <Revenue />
            </div>
          </div>
        </div>
        <div className="dashboardTopRight">
          <div className="dashboarCalendar">
            <Calendar />
          </div>
          <div className="dashboarShedule">
            <ChangeDay />
          </div>
        </div>
      </div>
      {/* Dashboard Buttom UI */}
      <div className="dashboardBottom">
        <div className="dashboardBottomLeft">
          {/* ChartUI */}
          <div className="dashboardBottomLeftHeader">
            <div className="dashboardBottomLeftTitle">Learn Activity</div>
            <div className="dashboardBottomLeftMounth">
              <div onClick={handlePreviousMonth}>
                {" "}
                <FaArrowLeft />
              </div>
              <h2>{`${date.toLocaleString("en-US", {
                month: "short",
              })} ${date.getFullYear()}`}</h2>

              <div onClick={handleNextMonth}>
                <FaArrowRight />
              </div>
            </div>
            <div className="menuMounth">
              This Mounth{" "}
              <span className="arrow-down">
                {" "}
                <IoIosArrowDown color=" rgba(148, 156, 169, 1)" />
              </span>
            </div>
          </div>
          <div style={{ marginLeft: "67px" }}>
            {" "}
            <LearnActivityChart />
          </div>
        </div>
        {/* --- */}
        <div className="dashboardBottomRight">
          <Rectangle />
        </div>
      </div>
    </div>
  );
};

export default DashboardManage;
