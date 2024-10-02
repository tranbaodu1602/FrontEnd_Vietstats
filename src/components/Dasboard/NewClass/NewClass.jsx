import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import SelectDay from "../../SelectDay/SelectDay";
import "./NewClass.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const NewClass = () => {
  const data = {
    labels: [
      "Course 1",
      "Course 2",
      "Course 3",
      "Course 4",
      "Course 5",
      "Course 6",
      "Course 7",
      "Course 8",
      "Course 9",
      "Course 10",
      "Course 11",
      "Course 12",
    ],
    datasets: [
      {
        type: "bar",
        label: "Classes",
        data: [32, 38, 25, 28, 35, 32, 29, 35, 33, 39, 20, 29],
        backgroundColor: " rgba(67, 195, 120, 1)",
        borderRadius: 70,
        borderSkipped: false,
        barThickness: 15,
        yAxisID: "y",
      },
      {
        type: "line",
        label: "Revenue",
        data: [
          3100, 3500, 2500, 2800, 3500, 3300, 3900, 4000, 3500, 4000, 2100,
          2900,
        ],
        borderColor: " rgba(10, 80, 17, 1)",
        borderWidth: 2,
        pointRadius: 3,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, chart.height, 0, 0); // Tạo gradient
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.03)");
          gradient.addColorStop(1, "rgba(157, 243, 161, 0.26)");
          return gradient;
        },
        borderDash: [5, 5],
        yAxisID: "y1",
        lineTension: 0.4,
        zIndex: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Classes",
        },
        ticks: {
          stepSize: 10,
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Revenue ($)",
        },
        ticks: {
          stepSize: 1000,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false, // Tắt tên biểu đồ
      },
    },
  };

  return (
    <div>
      <div className="newClassTitle">
        <div className="newClassName">New Classes</div>
        <div>
          <SelectDay />
        </div>
      </div>
      <div className="newClassContent">
        <div className="charbar">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default NewClass;
