// Importing mongoose
var mongoose = require("mongoose");
var constants = require("../../../constant");

var Schema = mongoose.Schema;
var Asana;

var AsanaSchema = new Schema({
    email: { type: String, required: true, unique: true },
    accessToken: { type: Number, default: 0 },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    password: { type: String },
});

//Export Asana module
Asana = module.exports = mongoose.model(constants.DB_MODEL_REF.ASANA, AsanaSchema);