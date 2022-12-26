const Game = require('../../models/Game');

exports.index = async (req, res) => {
    const games = await Game.find();
    res.send(games);
}
