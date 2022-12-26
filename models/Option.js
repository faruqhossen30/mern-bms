const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: false }
},{ timestamps: true });

module.exports = mongoose.model("Option", OptionSchema);