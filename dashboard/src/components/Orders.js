import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = () => {
    setLoading(true);
    api
      .get("/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (allOrders.length === 0 && !loading) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h3 className="title" style={{ margin: 0 }}>Orders ({allOrders.length})</h3>
        <button
          onClick={fetchOrders}
          disabled={loading}
          style={{
            background: "#f0f4f8",
            border: "1px solid #d3dfe9",
            borderRadius: "4px",
            padding: "6px 14px",
            fontSize: "0.85rem",
            color: "#387ed1",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {loading ? "Refreshing..." : "↻ Refresh"}
        </button>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Total</th>
              <th>Mode</th>
              <th>Payment ID</th>
              <th>Status</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              const modeClass = order.mode === "BUY" ? "profit" : "loss";
              const totalVal = (order.qty * (order.price || 0)).toFixed(2);
              const formattedDate = order.createdAt
                ? new Date(order.createdAt).toLocaleString("en-IN", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "Today";

              return (
                <tr key={index}>
                  <td><strong>{order.name}</strong></td>
                  <td>{order.qty}</td>
                  <td>₹{Number(order.price || 0).toFixed(2)}</td>
                  <td>₹{totalVal}</td>
                  <td className={modeClass}>{order.mode}</td>
                  <td style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#666" }}>
                    {order.paymentId ? order.paymentId : "Direct"}
                  </td>
                  <td>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "3px 8px",
                        borderRadius: "12px",
                        background: order.status === "COMPLETED" ? "#e8f5e9" : "#fff3e0",
                        color: order.status === "COMPLETED" ? "#2e7d32" : "#e65100",
                        fontWeight: "600",
                      }}
                    >
                      {order.status || "COMPLETED"}
                    </span>
                  </td>
                  <td style={{ fontSize: "0.8rem", color: "#888" }}>
                    {formattedDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
