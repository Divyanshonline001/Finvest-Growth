require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const authRoute = require("./routes/AuthRoute");

const { holdingsModel } = require("./model/holdingsModel");
const { positionsModel } = require("./model/positionsModel");
const { ordersModel } = require("./model/ordersModel");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const port = process.env.PORT || 4000;
const uri = process.env.MONGO_URI;

main()
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

async function main() {
  await mongoose.connect(uri);
}

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

app.use(bodyParser.json());
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".onrender.com") ||
        process.env.NODE_ENV !== "production"
      ) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "Finvest Growth Backend API is running successfully!",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await holdingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await positionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await ordersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new ordersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    paymentId: req.body.paymentId || "DIRECT",
    orderId: req.body.orderId || `order_${Date.now()}`,
    status: "COMPLETED",
    createdAt: new Date(),
  });

  await newOrder.save();
  res.send("Order saved!");
});

const getRazorpayInstance = () => {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret || key_id.includes("placeholder")) {
    return null;
  }
  return new Razorpay({ key_id, key_secret });
};

app.get("/razorpay/key", (req, res) => {
  const key_id = process.env.RAZORPAY_KEY_ID;
  const isConfigured = Boolean(key_id && !key_id.includes("placeholder"));
  res.json({
    key: isConfigured ? key_id : "",
    isConfigured,
  });
});

app.post("/razorpay/config-keys", (req, res) => {
  const { key_id, key_secret } = req.body;
  if (!key_id || !key_secret) {
    return res.status(400).json({ error: "Both key_id and key_secret are required." });
  }
  process.env.RAZORPAY_KEY_ID = key_id.trim();
  process.env.RAZORPAY_KEY_SECRET = key_secret.trim();
  return res.json({
    success: true,
    message: "Razorpay API credentials updated successfully!",
    key: process.env.RAZORPAY_KEY_ID,
  });
});

app.post("/razorpay/create-order", async (req, res) => {
  try {
    const { name, qty, price } = req.body;
    const quantity = Number(qty) || 1;
    const stockPrice = Number(price) || 0;
    const totalAmount = quantity * stockPrice;

    if (totalAmount <= 0) {
      return res.status(400).json({ error: "Total amount must be greater than 0" });
    }

    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret || key_id.includes("placeholder")) {
      return res.status(400).json({
        error: "Razorpay credentials not configured. Please provide your RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in backend/.env to open the payment gateway and update your Razorpay dashboard.",
        needsKeys: true,
      });
    }

    const razorpay = new Razorpay({ key_id, key_secret });
    const amountInPaise = Math.round(totalAmount * 100);

    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      notes: {
        stockName: String(name),
        quantity: String(quantity),
        price: String(stockPrice),
        total: String(totalAmount),
      },
    };

    const order = await razorpay.orders.create(options);

    return res.json({
      success: true,
      order,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: key_id,
    });
  } catch (error) {
    console.error("Razorpay order creation error:", error);
    res.status(500).json({ error: error.message || "Failed to create Razorpay order" });
  }
});

app.post("/razorpay/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      qty,
      price,
      mode = "BUY",
    } = req.body;

    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_secret) {
      return res.status(500).json({ success: false, message: "Server configuration error: Key secret missing." });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", key_secret)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment signature verification failed! Payment is not authentic.",
      });
    }

    const newOrder = new ordersModel({
      name: name || "UNKNOWN",
      qty: Number(qty) || 1,
      price: Number(price) || 0,
      mode: mode || "BUY",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      status: "COMPLETED",
      createdAt: new Date(),
    });

    await newOrder.save();

    res.json({
      success: true,
      message: "Payment verified successfully and order placed in database!",
      order: newOrder,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ success: false, error: error.message || "Failed to verify payment" });
  }
});

const financeOrGreetingRegex = new RegExp(
  "\\b(" + [
    "hi", "hello", "hey", "help", "who are you", "what can you do", "zerodha", "kite", "good morning", "good evening", "thank", "thanks",
    "stock", "share", "invest", "market", "nifty", "sensex", "mutual\\s*fund", "etf", "dividend", 
    "profit", "loss", "portfolio", "holding", "order", "fund", "money", "finance", "bond", 
    "trade", "trading", "price", "ltp", "broker", "brokerage", "crypto", "bitcoin", "tax", "gst", 
    "inflation", "interest", "bank", "loan", "equity", "derivative", "option", "future", 
    "f&o", "margin", "ipo", "pe\\s*ratio", "eps", "yield", "volatility", "bull", "bear",
    "itc", "infy", "tcs", "reliance", "sbi", "hdfc", "kpit", "m&m", "wipro", "bhartiartl", "ongc",
    "valuation", "debt", "commodity", "gold", "silver", "crude", "nse", "bse"
  ].join("|") + ")\\b",
  "i"
);

const localKnowledgeBase = {
  nifty: "Nifty 50 is the benchmark Indian stock market index representing the weighted average of 50 of the largest Indian companies listed on the National Stock Exchange (NSE).",
  sensex: "BSE Sensex is a benchmark index of 30 well-established and financially sound companies listed on the Bombay Stock Exchange (BSE).",
  order: "To place an order in Zerodha Kite, select the stock from your Watchlist, click 'Buy' or 'Sell', choose the order type (Market, Limit, SL, SL-M), specify quantity and price, and submit!",
  holdings: "Holdings represent equity shares purchased under CNC (Cash and Carry) that are held in your Demat account for long-term investment.",
  positions: "Positions display your intraday or open derivative (F&O) contracts. These must be squared off before market close or converted to CNC/NRML.",
  margin: "Margin is the funds required to open and hold leveraged trading positions (such as intraday equity or F&O). Check the Funds tab to monitor your available margin.",
};

app.post("/chatbot", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!financeOrGreetingRegex.test(message)) {
    return res.json({ 
      reply: "I am your Zerodha Kite AI Assistant! I specialize in finance, stocks, trading, and investment topics. Feel free to ask me about stocks, portfolios, Nifty/Sensex, order types, or market strategies!" 
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const { GoogleGenerativeAI } = require("@google/generative-ai");
      const genAI = new GoogleGenerativeAI(apiKey);
      
      const candidateModels = ["gemini-3.6-flash", "gemini-flash-latest"];
      let reply = null;
      let lastError = null;

      for (const modelName of candidateModels) {
        try {
          const model = genAI.getGenerativeModel({ model: modelName });
          const result = await model.generateContent(
            `You are a knowledgeable and friendly financial AI assistant for Zerodha Kite.
Help users with finance, stocks, investing, orders, and market analysis.
Keep your answers concise, clear, and professional.
User question: ${message}`
          );
          reply = result.response.text();
          if (reply) break;
        } catch (err) {
          lastError = err;
          console.warn(`Model ${modelName} failed, trying fallback:`, err.message);
        }
      }

      if (reply) {
        return res.json({ reply: reply.trim() });
      } else {
        throw lastError || new Error("Failed to get response from Gemini models");
      }
    } catch (error) {
      console.error("Gemini API error:", error.message);
    }
  }

  const lower = message.toLowerCase();
  for (const [key, response] of Object.entries(localKnowledgeBase)) {
    if (lower.includes(key)) {
      return res.json({ reply: response });
    }
  }

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return res.json({
      reply: "Hello! I am your Zerodha Kite AI assistant. Ask me anything about stock markets, portfolio management, placing orders, or investment options!"
    });
  }

  return res.json({
    reply: "I'm here to help with your stock trading and investment queries! You can ask about Nifty 50, Sensex, how to place orders, F&O margins, or specific stock valuations."
  });
});

app.get("/chatbot/status", (req, res) => {
  res.json({ geminiActive: !!process.env.GEMINI_API_KEY });
});

app.listen(port, () => {
  console.log(`app is listening at ${port}`);
});