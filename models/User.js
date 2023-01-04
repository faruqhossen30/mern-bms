const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isClub: { type: Boolean, required: true, default: false },
    isUser: { type: Boolean, required: true, default: true },
    balance: { type: Number, required: false, default: 0 },
    // Club
    clubOwner: { type: String, required: false },
    clubMobile: { type: String, required: false },
    clubAddress: { type: String, required: false },
    clubCommission: { type: Number, required: false },

    status: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
