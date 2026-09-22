import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import AnalyticsWindow from "./AnalyticsWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, price) => {},
  closeSellWindow: () => {},
  openAnalyticsWindow: (uid, stock) => {},
  closeAnalyticsWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isAnalyticsWindowOpen, setIsAnalyticsWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const [selectedAnalyticsUID, setSelectedAnalyticsUID] = useState("");
  const [selectedAnalyticsStock, setSelectedAnalyticsStock] = useState(null);

  const handleOpenBuyWindow = (uid, price = 0) => {
    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false);
    setIsAnalyticsWindowOpen(false);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  const handleOpenSellWindow = (uid, price = 0) => {
    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false);
    setIsAnalyticsWindowOpen(false);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  const handleOpenAnalyticsWindow = (uid, stock = null) => {
    setIsAnalyticsWindowOpen(true);
    setSelectedAnalyticsUID(uid);
    setSelectedAnalyticsStock(stock);
  };

  const handleCloseAnalyticsWindow = () => {
    setIsAnalyticsWindowOpen(false);
    setSelectedAnalyticsUID("");
    setSelectedAnalyticsStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openAnalyticsWindow: handleOpenAnalyticsWindow,
        closeAnalyticsWindow: handleCloseAnalyticsWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} price={selectedStockPrice} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} price={selectedStockPrice} />}
      {isAnalyticsWindowOpen && (
        <AnalyticsWindow uid={selectedAnalyticsUID} stock={selectedAnalyticsStock} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;