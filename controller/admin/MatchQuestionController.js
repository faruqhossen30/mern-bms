const MatchQuestion = require('../../models/MatchQuestion');

exports.index = async (req, res) => {
    const { page } = await req.query;
    console.log(page);
    const options = await {
        limit: 10,
        page: page && page || 1
    }

    const MatchQuestions = await MatchQuestion.paginate({},
        options
    );
    res.send(MatchQuestions);
}
exports.allteams = async(req, res) => {
    const country = await Team.find();
    res.send(country);
}

exports.store = (req, res) => {
    // const { name,status } = req.body;
    // const question = new MatchQuestion({name,status});
    // question.save();
    // res.send(question);
    res.send(req.body);
}