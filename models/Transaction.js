const { default: mongoose, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const User = mongoose.model('User');

const TransactionSchema = new mongoose.Schema({
    user       : { type: Schema.Types.ObjectId, ref: User, required: true },
    debit      : { type: Number, default:0, index: false },
    credit     : { type: Number, default:0, index: false },
    description: { type: String, required: false,index:false }
}, { timestamps: true });
TransactionSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Transaction", TransactionSchema);