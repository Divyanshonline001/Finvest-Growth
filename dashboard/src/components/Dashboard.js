import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = ({ username }) => {
  const [mobileTab, setMobileTab] = useState("content");
  const location = useLocation();

  useEffect(() => {
    // When navigating to any route from the menu, show content view on mobile
    setMobileTab("content");
  }, [location.pathname]);

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/orders":
        return "Orders";
      case "/holdings":
        return "Holdings";
      case "/positions":
        return "Positions";
      case "/funds":
        return "Funds";
      default:
        return "Summary";
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="mobile-view-tabs">
        <button
          type="button"
          className={`mobile-view-tab ${mobileTab === "watchlist" ? "active" : ""}`}
          onClick={() => setMobileTab("watchlist")}
        >
          <span className="tab-icon">📊</span> Watchlist
        </button>
        <button
          type="button"
          className={`mobile-view-tab ${mobileTab === "content" ? "active" : ""}`}
          onClick={() => setMobileTab("content")}
        >
          <span className="tab-icon">💼</span> {getPageTitle()}
        </button>
      </div>

      <div className={`dashboard-container mobile-tab-${mobileTab}`}>
        <div className={`watchlist-wrapper ${mobileTab === "watchlist" ? "mobile-show" : "mobile-hide"}`}>
          <GeneralContextProvider>
            <WatchList />
          </GeneralContextProvider>
        </div>
        <div className={`content ${mobileTab === "content" ? "mobile-show" : "mobile-hide"}`}>
          <Routes>
            <Route exact path="/" element={<Summary username={username} />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
