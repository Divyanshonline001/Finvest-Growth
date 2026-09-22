const { Schema } = require("mongoose");

const ordersSchema = new Schema({

  name: String,
  qty: Number,
  price: Number,
  mode: String,
  paymentId: { type: String, default: "" },
  orderId: { type: String, default: "" },
  status: { type: String, default: "COMPLETED" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = { ordersSchema };