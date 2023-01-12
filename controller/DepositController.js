const Deposit = require('../models/Deposit');
const User = require("../models/User");

exports.index = async (req, res) => {
    const deposit = await Deposit.paginate({},{limit: 10, populate: 'user'});
    // const deposit = await Deposit.find().populate("userId");
    res.json(deposit)
}
exports.show = async (req, res) => {
    const {id} = await req.params
    const deposit = await Deposit.findOne({_id:id});
    res.json(deposit)
}
exports.update = async (req, res) => {
    const {id} = await req.params
    const {amount,status,userId} = req.body
    const deposit = await Deposit.updateOne({_id:id},{amount:amount,status:status});
    const addbalance = await User.updateOne({_id:userId},{$inc:{balance:amount}});

    // res.send('deposit update done')
    res.json(deposit)
}
exports.store = (req, res) => {
    try {
        const { method, amount, fromAccount, toAccount, transactionId } = req.body;
        const deposit = new Deposit({
            user: req.user.user._id,
            // userId: 'sdfsdf',
            method: method,
            amount: amount,
            fromAccount: fromAccount,
            toAccount: toAccount,
            transactionId: transactionId
        });
        console.log('req test',req.user._id);
        deposit.save();
        res.json(deposit)

    } catch (err) {
        return res.json(err)
    }
}

// ================= for user end
exports.userDeposites = async (req, res) => {
    const {id} = await req.params
    const deposit = await Deposit.paginate({user:id},{limit: 10});
    // const deposit = await Deposit.find().populate("userId");
    res.json(deposit)
}