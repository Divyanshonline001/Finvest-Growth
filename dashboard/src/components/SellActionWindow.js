import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      return resolve(true);
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const SellActionWindow = ({ uid, price = 0 }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const navigate = useNavigate();
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price || 0.0);

  useEffect(() => {
    if (price && price > 0) {
      setStockPrice(price);
    }
  }, [price]);

  const handleSellClick = async () => {
    const qty = Number(stockQuantity);
    const prc = Number(stockPrice);

    if (isNaN(qty) || qty <= 0 || isNaN(prc) || prc <= 0) {
      alert("Please enter a valid quantity and price.");
      return;
    }

    try {
      await loadRazorpayScript();

      const orderResponse = await axios.post(
        "http://localhost:4000/razorpay/create-order",
        {
          name: uid,
          qty,
          price: prc,
          mode: "SELL",
        },
        { withCredentials: true }
      );

      const orderData = orderResponse.data;

      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "Finvest Growth",
        description: `Sell ${qty} shares of ${uid}`,
        image: "/Finvest Growth Logo Lockup.png",
        order_id: orderData.orderId,
        handler: async function (paymentResponse) {
          try {
            const verifyRes = await axios.post(
              "http://localhost:4000/razorpay/verify-payment",
              {
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
                name: uid,
                qty,
                price: prc,
                mode: "SELL",
              },
              { withCredentials: true }
            );

            if (verifyRes.data.success) {
              closeSellWindow();
              navigate("/orders");
            } else {
              alert("Payment verification failed: " + (verifyRes.data.message || "Invalid signature"));
            }
          } catch (err) {
            console.error("Verification error:", err);
          }
        },
        prefill: {
          name: "Zerodha Trader",
          email: "trader@zerodha.local",
          contact: "9999999999",
        },
        theme: {
          color: "#df514c",
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.on("payment.failed", function (response) {
        alert(`Payment Failed: ${response.error.description || "Transaction declined"}`);
      });

      razorpayInstance.open();
    } catch (error) {
      console.error("Failed to place sell order", error);
      alert(error.response?.data?.error || error.message || "Failed to initiate payment");
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(Number(stockQuantity) * Number(stockPrice)).toFixed(2)}</span>
        <div>
          <Link className="btn btn-orange" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
