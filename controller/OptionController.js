const Option = require("../models/Option");

exports.get = async (req, res) => {
  const { key } = await req.params;
  const findValue = await Option.findOne({ key: key });
  res.json(findValue);
};
exports.set = async (req, res) => {
  const { key, value } = await req.body;
  const findValue = await Option.findOne({ key: key });

  if (findValue) {
    // res.send(`${key} option already exist.`)
    const some = await Option.updateOne({ key: key },{value})
  } else {
    const addOption = await new Option({ key: key, value: value }).save();
    res.send(addOption);
  }
  //  res.json(req.body);
};
