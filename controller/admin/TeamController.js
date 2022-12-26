const Team = require('../../models/Team');

exports.index = async (req, res) => {
    const { page } = await req.query;
    console.log(page);
    const options = await {
        limit: 10,
        page: page && page || 1
    }

    const teams = await Team.paginate({},
        options
    );
    res.send(teams);
}
exports.store = (req, res) => {
    const { name } = req.body;
    const team = new Team({ name });
    team.save();
    res.send(team);
}