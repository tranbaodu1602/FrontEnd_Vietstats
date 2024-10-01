import React from "react";
import "./Grid.css";

const Grid = () => {
  return (
    <div className="grid-container">
      {/* Tạo 10 đường ngang */}
      {Array.from({ length: 10 }).map((_, rowIndex) => (
        <div
          key={`horizonal-${rowIndex}`}
          className="horizontal-line"
          style={{ top: `${(rowIndex * 494) / 9}px` }}
        />
      ))}
      {/* Tạo 10 đường dọc */}
      {Array.from({ length: 10 }).map((_, colIndex) => (
        <div
          key={`vertical-${colIndex}`}
          className="vertical-line"
          style={{ left: `${(colIndex * 494) / 9}px` }}
        />
      ))}
    </div>
  );
};

export default Grid;
