const Match = require("../../models/Match");
const MatchQuestion = require("../../models/MatchQuestion");
// const MatchQuestionOption = require("../../models/MatchQuestionOption");

exports.index = async (req, res) => {
  const { page } = await req.query;
  console.log(page);
  const options = await {
    limit: 10,
    page: (page && page) || 1,
  };

  const MatchQuestions = await MatchQuestion.paginate({}, options);
  res.send(MatchQuestions);
};
exports.allteams = async (req, res) => {
  const country = await Team.find();
  res.send(country);
};

exports.store = async (req, res) => {
  const { title, status, options } = await req.body;
  const { id } = await req.params;
  const matchQuestion = await new MatchQuestion({ title, status }).save();

  const matchUpdate = await Match.findOneAndUpdate(
    { _id: id },
    { $push: { questions: matchQuestion._id } }
  );

  // res.send(options);

  //   const data = {
  //     title: "this is title",
  //     question: "63b995170abfc5345f787233",
  //     betRate: 2,
  //     betLimit: 100,
  //   };

  for (let item of options) {
    const matchOptionAdd = await MatchQuestion.findOneAndUpdate(
      { _id: matchQuestion._id },
      { $push: { options: { title: item.title,betRate:item.rate} } }
    );
  }

  res.send(options);

  // const matchQuestionOption = new MatchQuestionOption(data);
  // matchQuestionOption.save();
  // res.send(req.body);
};
