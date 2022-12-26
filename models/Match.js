const { default: mongoose, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Game = mongoose.model('Game');
const MatchSchema = new mongoose.Schema({
    team_one:{
        type:String,
        required:true,
        index: false
    },
    team_two:{
        type:String,
        required:true,
        index: false
    },
    date:{
        type:Date,
        required:true,
        index: false
    },
    time:{
        type:Date,
        required:true,
        index: false
    },
    game_type: {
        type: Schema.Types.ObjectId,
        ref:Game
    },
    bet_statement: {
        type: String,
        require:true,
        index:false
    },
    bet_statement: {
        type: String,
        require:true,
        index:false
    },
},
    { timestamps: true });
MatchSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Match", MatchSchema);