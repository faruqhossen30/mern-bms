const User = require("../../models/User");

exports.index = async(req, res)=>{
  const users = await User.find({isClub:true},{'password':false});
  res.send(users);
}


exports.store = (req, res) => {
  const {
    name,
    username,
    email,
    mobile,
    clubOwner,
    clubMobile,
    clubAddress,
    clubCommission,
    password,
    status,
  } = req.body;

  const club = new User({
    name,
    username,
    email,
    mobile,
    clubOwner,
    clubMobile,
    clubAddress,
    clubCommission,
    password,
    isClub:true,
    status,
  }).save();

  res.send(club);
};
