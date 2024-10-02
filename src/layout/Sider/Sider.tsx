import React from "react";
import "./Sider.css";
import { Menu } from "antd";
import { MdHomeFilled, MdClass } from "react-icons/md";
import { FaRegCalendarAlt, FaHandHoldingUsd } from "react-icons/fa";
import { IoLaptopOutline, IoSettings, IoPerson } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";

const items = [
  {
    key: "1",
    icon: <MdHomeFilled />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <FaRegCalendarAlt />,
    label: "Calender",
  },
  {
    key: "3",
    icon: <IoLaptopOutline />,
    label: "Course Managerment",
  },
  {
    key: "4",
    icon: <MdClass />,
    label: "Class Managerment",
  },
  {
    key: "5",
    icon: <IoPerson />,
    label: "Tutor Managerment",
  },
  {
    key: "6",
    icon: <RiGraduationCapFill />,
    label: "Student Managerment",
  },
  {
    key: "7",
    icon: <FaHandHoldingUsd />,
    label: "Bill Managerment",
  },
  {
    key: "8",
    icon: <IoSettings />,
    label: "Setting",
  },
];

const Sider = () => {
  return (
    <div className="siderContainer">
      <Menu
        defaultSelectedKeys={["1"]}
        //defaultOpenKeys={["sub1"]}
        // mode="inline"
        theme="light"
        //inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Sider;
