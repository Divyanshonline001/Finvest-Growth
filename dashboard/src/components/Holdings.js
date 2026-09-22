import React, { useState, useEffect } from "react";
import api from '../api';
import { VerticleChart } from "./VerticleChart";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    api.get("/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subarray) => subarray["name"]);

  const data = {
    labels,
    datasets: [{
      label: 'Stock Name',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }],
  };

  let totalInvestment = 0;
  let currentValue = 0;

  allHoldings.forEach((stock) => {
    totalInvestment += stock.avg * stock.qty;
    currentValue += stock.price * stock.qty;
  });

  const totalPnL = currentValue - totalInvestment;
  const isProfit = totalPnL >= 0;
  const pnlPercent = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;
  const pnlClass = isProfit ? "profit-text" : "loss-text";

  const totalInvestmentStr = totalInvestment.toFixed(2);
  const [totalInvInt, totalInvDec] = totalInvestmentStr.split(".");

  const currentValueStr = currentValue.toFixed(2);
  const [currValInt, currValDec] = currentValueStr.split(".");

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock, index) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currVal.toFixed(2)}</td>
                <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvInt}.<span>{totalInvDec}</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currValInt}.<span>{currValDec}</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={pnlClass}>
            {totalPnL >= 0 ? "+" : ""}{totalPnL.toFixed(2)} ({pnlPercent >= 0 ? "+" : ""}{pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticleChart data={data} />
    </>
  );
}
export default Holdings;
