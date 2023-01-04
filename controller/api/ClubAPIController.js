const User = require('../../models/User');

exports.index = async(req, res)=>{
    const users = await User.find({isClub:true},{'password':false});
    res.send(users);
}

