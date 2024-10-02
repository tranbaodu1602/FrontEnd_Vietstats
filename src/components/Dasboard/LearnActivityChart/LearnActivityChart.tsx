import React from "react";
import { Line } from "react-chartjs-2";
import "./LearnActivityChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
  }[];
}

const LearnActivityChart: React.FC = () => {
  const labels: string[] = [
    "Basic ENG",
    "Children ENG",
    "Math",
    "Tutor",
    "11 Online",
    "Literature",
    "Ex Math",
    "Ex ENG",
    "M",
  ];

  const data: ChartData = {
    labels,
    datasets: [
      {
        label: "This Month",
        data: [40, 36, 30, 15, 26, 18, 17, 13, 10], //data sample
        borderColor: "rgba(255, 105, 104, 1)",
        backgroundColor: " rgba(255, 105, 104, 1)",
        tension: 0.4,
      },
      {
        label: "Previous Month",
        data: [13, 15, 17, 20, 17, 19, 21, 28, 25],
        borderColor: " rgba(38, 138, 255, 1)",
        backgroundColor: "background: rgba(38, 138, 255, 1)",
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 48,
        ticks: {
          stepSize: 8,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "1200px", height: "468px" }}>
      <div style={{ width: "1110px", height: "310px" }}>
        <Line data={data} options={options} width={1130} height={240} />
      </div>
      <div className="note">
        <div className="note1">
          <span></span>
          This Month
        </div>
        <div className="note2">
          <span></span>
          Previous Month
        </div>
      </div>
    </div>
  );
};

export default LearnActivityChart;
