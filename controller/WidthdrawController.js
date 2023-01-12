const Withdraw = require("../models/Withdraw");
const User = require("../models/User");

exports.index = async (req, res) => {
    const withdraws = await Withdraw.paginate({},{limit: 10, populate: 'user'});
    res.json(withdraws)
}
exports.show = async (req, res) => {
    const {id} = await req.params
    const singleWidthdraw = await Withdraw.findOne({_id:id}).populate('user');
    res.json(singleWidthdraw)
}
exports.update = async (req, res) => {
    const {id} = await req.params
    const {status} = req.body
    const updateWidthdraw = await Withdraw.updateOne({_id:id},{status:status});
    const singleWindthraw = await Withdraw.findOne({_id:id});


    const addbalance = await User.updateOne({_id:singleWindthraw.user},{$inc:{balance:-singleWindthraw.amount}});

    // res.send('deposit update done')
    res.json(addbalance)
}
exports.store = async(req, res) => {
    try {
        const { method,type,accountNumber, amount, note} = await req.body;
        const addWithdraw = await new Withdraw({user:req.user.user._id,method,type,accountNumber, amount, note}).save();
        console.log('req test',req.user._id);
        res.send(addWithdraw)

    } catch (err) {
        return res.json(err)
    }
}

// for user
exports.userWidthdraws = async (req, res) => {
    const {id} = await req.params
    const withdraws = await Withdraw.paginate({user:id},{limit: 10});
    res.json(withdraws)
}