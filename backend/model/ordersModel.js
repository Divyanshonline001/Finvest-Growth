const {model} = require("mongoose");
const {ordersSchema} = require("../schema/ordersSchema");

const ordersModel = new model("order",ordersSchema);

module.exports= {ordersModel};