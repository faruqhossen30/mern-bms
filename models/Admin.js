const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique:true },
    email: { type: String, required: true, unique: true},
    mobile: { type: String, index:false},
    role: { type: String, default:'admin'},
    password: { type: String, required: true },
    status: { type: Boolean, default:true},
},{ timestamps: true });

module.exports = mongoose.model("Admin", adminSchema);
