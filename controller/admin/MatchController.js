const Match = require("../../models/Match");

exports.index = async (req, res) => {
  const { page } = await req.query;
  // console.log('page',page);
  const options = await {
    limit: 10,
    page: (page && page) || 1,
    populate: 'questions'
  };

  // const matches = await Match.paginate({}, options);
  const matches = await Match.paginate({},{limit: 10, populate: 'questions'});
  res.send(matches);
};
exports.allteams = async (req, res) => {
  const country = await Team.find();
  res.send(country);
};

exports.store = (req, res) => {
  const {
    teamOne,
    teamTwo,
    title,
    teamOneFlag,
    teamTwoFlag,
    date,
    status,
    autoQuestion,
    note
  } = req.body;
  const match = new Match({
    teamOne,
    teamTwo,
    title,
    teamOneFlag,
    teamTwoFlag,
    date,
    status,
    autoQuestion,
    note
  });
  match.save();
  res.send(match);
};

exports.show = async(req, res) => {
  const { id } = await req.params;
  const match = await Match.findOne({ _id: id });
  res.send(match);
};

exports.update = async(req, res) => {
  const { id } = await req.params;
  const {
    teamOne,
    teamTwo,
    title,
    teamOneFlag,
    teamTwoFlag,
    date,
    status,
    autoQuestion,
    note
  } = await req.body;
  const match = await  Match.updateOne({_id:id},{teamOne,
    teamTwo,
    title,
    teamOneFlag,
    teamTwoFlag,
    date,
    status,
    autoQuestion,
    note}
    );
  res.send(match);

  // res.send(id)
};

exports.destroy = async(req, res) => {
  const { id } = await req.params;
  const des = await Match.deleteOne({_id:id});
  res.send(des);

  // res.send(id)
};
