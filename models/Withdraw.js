const { default: mongoose, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const User = mongoose.model('User');

const WithdrawSchema = new mongoose.Schema({
    user         : { type: Schema.Types.ObjectId, ref: User, required: true },
    method       : { type: String, index: false },
    type         : { type: String, index: false },
    accountNumber: { type: String, required: true },
    amount       : { type: String, required: true, index: false },
    note         : { type: String, index: false, required: false },
    status       : { type: Boolean, index: false, default: false }
}, { timestamps: true });
WithdrawSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Withdraw", WithdrawSchema);