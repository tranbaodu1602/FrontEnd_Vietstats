import React from "react";
import "./Card.css";
import { MdClass } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";

interface Item {
  key: string;
  icon: JSX.Element;
  label: string;
  total: string;
  color: string;
  bg: string;
}

const items: Item[] = [
  {
    key: "1",
    icon: <MdClass />,
    label: "Class",
    total: "254",
    color: " rgba(55, 125, 255, 1)",
    bg: " rgba(235, 242, 255, 1)",
  },
  {
    key: "2",
    icon: <IoPerson />,
    label: "Tutor",
    total: "647",
    color: "#3fce57d6",
    bg: "rgba(235, 250, 243, 1)",
  },
  {
    key: "3",
    icon: <RiGraduationCapFill />,
    label: "Student",
    total: "834",
    color: "rgba(223, 161, 40, 1)",
    bg: "rgba(249, 236, 212, 1)",
  },
  {
    key: "4",
    icon: <FaHandHoldingUsd />,
    label: "Total Revenue",
    total: "$834",
    color: "rgba(255, 105, 104, 1)",
    bg: " rgba(252, 228, 222, 1)",
  },
];
const Card: React.FC = () => {
  return (
    <div className="listCard">
      {items.map((item) => (
        <div key={item.key} className="cardItem">
          <div className="boxImg" style={{ backgroundColor: item.bg }}>
            <div className="icon" style={{ color: item.color }}>
              {item.icon}
            </div>
          </div>
          <div className="total">{item.total}</div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
