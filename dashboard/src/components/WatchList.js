import React, { useState, useContext } from "react";

import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";

import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";
import GeneralContext from "./GeneralContext";

const Watchlist = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const data = {
    labels: filteredWatchlist.map((stock) => stock.name),
    datasets: [
      {
        label: 'Price',
        data: filteredWatchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)', 
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="counts">{filteredWatchlist.length} / 50</span>
      </div>

      <ul className="list">
        {filteredWatchlist.map((stock, index) => {
          return (
            <WatchListItem stock={stock} key={index}></WatchListItem>);
        })}
      </ul>
      <DoughnutChart data={data}></DoughnutChart>
    </div>
  );
}

export default Watchlist;

const WatchListItem = ({ stock }) => {

  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  }
  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  }

  const handleItemClick = () => {
    setShowWatchListActions((prev) => !prev);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleItemClick}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className={`iteminfo ${showWatchListActions ? "hide" : ""}`}>
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDown className='down' /> : <KeyboardArrowUp className='up' />}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} price={stock.price} stock={stock} />}
    </li>
  );
}

const WatchListActions = ({ uid, price, stock }) => {
  const { openBuyWindow, openSellWindow, openAnalyticsWindow } = useContext(GeneralContext);

  return (
    <span className="actions" onClick={(e) => e.stopPropagation()}>
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button 
            className="buy" 
            onClick={(e) => {
              e.stopPropagation();
              openBuyWindow(uid, price);
            }}
          >
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button 
            className="sell" 
            onClick={(e) => {
              e.stopPropagation();
              openSellWindow(uid, price);
            }}
          >
            Sell
          </button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button 
            className="action" 
            onClick={(e) => {
              e.stopPropagation();
              openAnalyticsWindow(uid, stock);
            }}
          >
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" onClick={(e) => e.stopPropagation()}>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};