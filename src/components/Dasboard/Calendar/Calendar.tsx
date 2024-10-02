import React, { useState } from "react";
import moment from "moment";
import "./Calendar.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDay, setSelectedDay] = useState<number | null>(1); // State để lưu ngày được chọn

  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, "month"));
  };

  const daysInMonth = currentDate.daysInMonth();
  const startOfMonth = currentDate.startOf("month").day();

  const daysArray = [];

  for (let i = 0; i < startOfMonth; i++) {
    daysArray.push(<div key={`empty-${i}`} className="day empty"></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(
      <div
        key={day}
        className={`day ${selectedDay === day ? "selected" : ""}`}
        onClick={() => setSelectedDay(day)}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="calendar">
      <div className="header">
        <div onClick={goToPreviousMonth}>
          <IoIosArrowBack />
        </div>
        <div>{currentDate.format("MMMM YYYY")}</div>
        <div onClick={goToNextMonth}>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="days">
        <div className="day cal">Sun</div>
        <div className="day cal">Mon</div>
        <div className="day cal">Tue</div>
        <div className="day cal">Wed</div>
        <div className="day cal">Thu</div>
        <div className="day cal">Fri</div>
        <div className="day cal">Sat</div>
        {daysArray}
      </div>
    </div>
  );
};

export default Calendar;
