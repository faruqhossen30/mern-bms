const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    timezone: { type: String, index: false },
    flag: { type: String, index: false }
}, { timestamps: true });
teamSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Team", teamSchema);