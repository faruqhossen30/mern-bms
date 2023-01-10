const PaymentGateway = require("../models/PaymentGateway");
// const User = require("../models/User");

exports.index = async (req, res) => {
  const gateways = await PaymentGateway.find();
  // const deposit = await Deposit.find().populate("userId");
  res.json(gateways);
};
exports.show = async (req, res) => {
  const { id } = await req.params;
  const deposit = await Deposit.findOne({ _id: id });
  res.json(deposit);
};
exports.update = async (req, res) => {
  const { id } = await req.params;
  const { amount, status, userId } = req.body;
  const deposit = await Deposit.updateOne(
    { _id: id },
    { amount: amount, status: status }
  );
  const addbalance = await User.updateOne(
    { _id: userId },
    { $inc: { balance: amount } }
  );

  // res.send('deposit update done')
  res.json(deposit);
};
exports.store = (req, res) => {
  try {
    const { id } = req.params;
    res.json(req.body);
    const { accountNumber, method, type, status } = req.body;

    const gateway = new PaymentGateway({
      accountNumber,
      method,
      type,
      status,
    });
    // console.log('req test',req.user._id);
    gateway.save();
    res.json(gateway);
  } catch (err) {
    return res.json(err);
  }
};

exports.destroy = async(req, res) => {
  try {
    const { id } = await req.params;
    const deleteData = await PaymentGateway.deleteOne({_id:id});
    res.send('delete done');
    // const { accountNumber, method, type, status} = req.body;

    // const gateway = new PaymentGateway({
    //     accountNumber, method, type, status
    // });
    // // console.log('req test',req.user._id);
    // gateway.save();
    // res.json(gateway)
  } catch (err) {
    return res.json(err);
  }
};
