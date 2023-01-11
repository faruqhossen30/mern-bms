const Option = require("../models/Option");

exports.options = async (req, res) => {
  const options = await Option.find();
  res.json(options);
};
exports.headerNotice = async (req, res) => {
  const headerNotice = await Option.findOne({ key: 'headerNotice' });
  res.json(headerNotice);
};
exports.footerNotice = async (req, res) => {
  const footerNotice = await Option.findOne({ key: 'footerNotice' });
  res.json(footerNotice);
};

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
