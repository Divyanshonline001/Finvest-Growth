const {model} = require("mongoose");
const {positionsSchema} = require("../schema/positionSchema");

const positionsModel = new model("position",positionsSchema);

module.exports= {positionsModel}; 