const {model} = require("mongoose");
const {holdingsSchema} = require("../schema/holdingsSchema");

const holdingsModel = new model("holding",holdingsSchema);

module.exports= {holdingsModel};