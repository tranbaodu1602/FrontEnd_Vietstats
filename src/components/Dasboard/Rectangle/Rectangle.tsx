import React from "react";
import "./Rectangle.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Item {
  key: string;
  label: string;
  total: string;
  percent: string | null;
  inscreate: boolean | null;
}

const items: Item[] = [
  {
    key: "1",
    label: "Total Class",
    total: "20",
    percent: "15",
    inscreate: true,
  },
  {
    key: "2",
    label: "New Class",
    total: "6",
    percent: "50",
    inscreate: true,
  },
  {
    key: "3",
    label: "Stopped Class",
    total: "4",
    percent: "5",
    inscreate: false,
  },
  {
    key: "4",
    label: "Class today",
    total: "12",
    percent: "null",
    inscreate: null,
  },
];
const Rectangle: React.FC = () => {
  return (
    <div className="listRectangle">
      {items.map((item) => (
        <div key={item.key} className="Rectangle">
          <div className="rectangleTitle">
            <div className="rectangleLabel">{item.label}</div>
            <div className="rectangleTotal">{item.total} CLASS</div>
          </div>
          <div className="rectangleposition">
            {item.inscreate !== null && item.inscreate === true ? (
              <div className="rectangleInscreate up">
                <FaArrowUp />
                {item.percent} %
              </div>
            ) : item.inscreate !== null && item.inscreate === false ? (
              <div className="rectangleInscreate dow">
                <FaArrowDown />
                {item.percent} %
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rectangle;
