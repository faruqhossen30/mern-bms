const mongoose = require("mongoose");

const PaymentGatewaySchema = new mongoose.Schema({
    accountNumber: { type: String, required: true },
    method: { type: String, index: false },
    type: { type: String, index: false },
    status: { type: Boolean, index: false,default:false }
}, { timestamps: true });
module.exports = mongoose.model("PaymentGateway", PaymentGatewaySchema);