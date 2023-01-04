const Match = require('../../models/Match');

exports.index = async (req, res) => {
    const { page } = await req.query;
    console.log(page);
    const options = await {
        limit: 10,
        page: page && page || 1
    }

    const matches = await Match.paginate({},
        options
    );
    res.send(matches);
}
exports.allteams = async(req, res) => {
    const country = await Team.find();
    res.send(country);
}

exports.store = (req, res) => {
    const { teamOne,teamTwo,teamOneFlag, teamTwoFlag,date,time,status,autoQuestion } = req.body;
    const match = new Match({teamOne,teamTwo,teamOneFlag,teamTwoFlag,date,time,status,autoQuestion});
    match.save();
    res.send(match);
}