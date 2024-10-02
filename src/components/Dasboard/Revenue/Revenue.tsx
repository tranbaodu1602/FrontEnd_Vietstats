import React from "react";
import { Bar } from "react-chartjs-2";
import "./Revenue.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import SelectDay from "../../SelectDay/SelectDay";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Revenue: React.FC = () => {
  const data = {
    labels: ["Yesterday", "Today"],
    datasets: [
      {
        label: "$",
        data: [28, 48], // data ex
        backgroundColor: ["rgba(55, 125, 255, 1))", "rgba(55, 125, 255, 1)"],
        borderColor: ["rgba(55, 125, 255, 1)", "rgba(55, 125, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false, //**enable note
      },
    },
  };

  return (
    <div>
      <div className="revenueTitle">
        <div className="revenueName">Revenue</div>
        <div>
          <SelectDay />
        </div>
      </div>
      <div className="revenueContent">
        <div className="revenueLeft">
          <div style={{ width: "320px", height: "220px" }}>
            <Bar data={data} options={options} height={90} width={70} />
          </div>
        </div>
        <div className="revenueRight">
          <span className="today">Today</span>
          <div className="amount1">
            $<span className="amount2">42</span>
          </div>

          <div className="growth">+24%</div>
          <span className="vsYesterday">vs yesterday</span>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
