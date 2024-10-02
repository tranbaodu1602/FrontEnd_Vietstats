import React, { useState } from "react";
import "./ChangeDay.css";
import { GoDeviceCameraVideo } from "react-icons/go";

const ChangeDay: React.FC = () => {
  const items = [
    { date: "01", month: "Jan", circles: 1 },
    { date: "02", month: "Feb", circles: 1 },
    { date: "03", month: "Mar", circles: 3 },
    { date: "04", month: "Apr", circles: 2 },
    { date: "05", month: "May", circles: 2 },
  ];
  const sheduleItems = [
    {
      time: "8:00",
      day: "am",
      subjectTitle: "Subject1",
      tutorID: "Tutor ID",
      student: "Student ID",
      color: "rgba(55, 125, 255, 1)",
    },
    {
      time: "10:30",
      day: "am",
      subjectTitle: "Subject1",
      tutorID: "Tutor ID",
      student: "Student ID",
      color: "rgba(255, 105, 104, 1)",
    },
    {
      time: "2:00",
      day: "pm",
      subjectTitle: "Subject1",
      tutorID: "Tutor ID",
      student: "Student ID",
      color: "rgba(67, 195, 120, 1)",
    },
    {
      time: "",
      day: "",
      subjectTitle: "Subject1",
      tutorID: "Tutor ID",
      student: "Student ID",
      color: " rgba(169, 169, 169, 1)",
    },
  ];
  const circleColors = [
    "rgba(55, 125, 255, 1)",
    "rgba(255, 105, 104, 1)",
    "rgba(67, 195, 120, 1)",
  ];

  const [selectedItem, setSelectedItem] = useState<number | null>(2);

  return (
    <div className="changeDayContainer">
      <div className="changeDayTitle">
        <span>Today,</span> 16 February
      </div>
      <div className="changeDay">
        {items.map((item, index) => (
          <div
            className={`boxItem ${selectedItem === index ? "boxSelected" : ""}`}
            key={index}
          >
            <div
              className={`dayItem ${selectedItem === index ? "selected" : ""}`}
              onClick={() => setSelectedItem(index)}
            >
              <div className="date">
                <span className="day">{item.date}</span>
                <span className="month">{item.month}</span>
              </div>
            </div>
            <div className="circles">
              {Array.from({ length: item.circles }).map((_, circleIndex) => (
                <div
                  key={circleIndex}
                  className="circle"
                  style={{ backgroundColor: circleColors[circleIndex] }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="shedule">
        {sheduleItems.map((scheduleitem, index) => (
          <div key={index} className="sheduleItem">
            <div className="sheduleTime">
              {scheduleitem.time} {scheduleitem.day}
            </div>
            <div
              className="sheduleContent"
              style={{ background: scheduleitem.color }}
            >
              <div className="sheduleLeft">
                <div className="sheduleImgBox">
                  <GoDeviceCameraVideo color="black" width={9} height={9} />
                </div>
              </div>
              <div className="sheduleRight">
                <div className="subjectTitle">{scheduleitem.subjectTitle}</div>
                <div>Tutor: {scheduleitem.tutorID}</div>
                <div>Student: {scheduleitem.student}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangeDay;
