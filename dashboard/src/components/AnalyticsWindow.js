import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import GeneralContext from "./GeneralContext";
import "./AnalyticsWindow.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsWindow = ({ uid, stock }) => {
  const { closeAnalyticsWindow, openBuyWindow, openSellWindow } = useContext(GeneralContext);

  const price = stock?.price || 1000.0;
  const isDown = stock?.isDown || false;
  const percent = stock?.percent || "0.00%";

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Yesterday", "Today"];
  const basePrice = price * (isDown ? 1.03 : 0.97);
  const dataPoints = [
    Number((basePrice * 0.985).toFixed(2)),
    Number((basePrice * 0.995).toFixed(2)),
    Number((basePrice * 1.01).toFixed(2)),
    Number((basePrice * 1.002).toFixed(2)),
    Number((basePrice * 1.015).toFixed(2)),
    Number((basePrice * (isDown ? 1.02 : 0.99)).toFixed(2)),
    Number(price.toFixed(2)),
  ];

  const barColors = dataPoints.map((val, idx) => {
    if (idx === 0) return "rgba(56, 126, 209, 0.7)";
    return val >= dataPoints[idx - 1]
      ? "rgba(46, 164, 79, 0.75)"
      : "rgba(223, 81, 76, 0.75)";
  });

  const borderColors = dataPoints.map((val, idx) => {
    if (idx === 0) return "#387ed1";
    return val >= dataPoints[idx - 1] ? "#2ea44f" : "#df514c";
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: `${uid} Price (₹)`,
        data: dataPoints,
        backgroundColor: barColors,
        borderColor: borderColors,
        borderWidth: 1.5,
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => ` Price: ₹${context.parsed.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `₹${value}`,
          font: { size: 11 },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 11 },
        },
      },
    },
  };

  const dayHigh = (price * 1.018).toFixed(2);
  const dayLow = (price * 0.984).toFixed(2);
  const fiftyTwoHigh = (price * 1.25).toFixed(2);
  const fiftyTwoLow = (price * 0.78).toFixed(2);

  const handleBuy = () => {
    closeAnalyticsWindow();
    openBuyWindow(uid, price);
  };

  const handleSell = () => {
    closeAnalyticsWindow();
    openSellWindow(uid, price);
  };

  return (
    <div className="analytics-modal-backdrop" onClick={closeAnalyticsWindow}>
      <div className="analytics-window" onClick={(e) => e.stopPropagation()}>
        <div className="analytics-header">
          <div>
            <h3>
              {uid}
              <span className="price-badge">₹{price.toFixed(2)}</span>
              <span className={`change-tag ${isDown ? "down" : "up"}`}>
                {percent}
              </span>
            </h3>
          </div>
          <button className="close-btn" onClick={closeAnalyticsWindow} title="Close">
            ✕
          </button>
        </div>

        <div className="analytics-body">
          <div className="analytics-stats-grid">
            <div className="stat-box">
              <span className="stat-label">Day High</span>
              <span className="stat-value" style={{ color: "#2ea44f" }}>₹{dayHigh}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Day Low</span>
              <span className="stat-value" style={{ color: "#df514c" }}>₹{dayLow}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">52W High</span>
              <span className="stat-value">₹{fiftyTwoHigh}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">52W Low</span>
              <span className="stat-value">₹{fiftyTwoLow}</span>
            </div>
          </div>

          <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#4a5568", marginBottom: "8px" }}>
            7-Session Price Movement (Bar Chart)
          </div>

          <div className="chart-container">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="analytics-footer">
          <div className="analytics-footer-info">
            NSE / BSE Real-time Chart Analytics
          </div>
          <div className="analytics-action-buttons">
            <button type="button" className="btn-small-buy" onClick={handleBuy}>
              Buy {uid}
            </button>
            <button type="button" className="btn-small-sell" onClick={handleSell}>
              Sell {uid}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsWindow;
