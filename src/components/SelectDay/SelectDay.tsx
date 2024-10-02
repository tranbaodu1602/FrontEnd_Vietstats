import React, { useState } from "react";
import "./SelectDay.css";
import { IoIosArrowDown } from "react-icons/io";

const SelectDay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State để quản lý việc mở/đóng menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Đảo ngược trạng thái khi nhấp
  };

  return (
    <div>
      <div className="dropdown" onClick={toggleMenu}>
        <span className="viewmenu">Today</span>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      {isOpen && (
        <div className="menu">
          <div>Yesterday</div>
          <div>Custom Range</div>
        </div>
      )}
    </div>
  );
};

export default SelectDay;
