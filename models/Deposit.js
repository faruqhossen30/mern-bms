const { default: mongoose, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const User = mongoose.model('User');
const DepositSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    method:{
        type:String,
        required:true,
        index: false
    },
    amount:{
        type:String,
        required:true,
        index: false
    },
    fromAccount:{
        type:String,
        required:true,
        index: false
    },
    toAccount:{
        type:String,
        required:true
    },
    transactionId:{
        type:String,
        required:false,
        index: false
    },
    status:{
        type:Boolean,
        default:false
    },
},
    { timestamps: true });
DepositSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Deposit", DepositSchema);