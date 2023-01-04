const {mongoose, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const MatchSchema = new mongoose.Schema({
    teamOne: {
        type: String,
        required: true
    },
    teamTwo: {
        type: String,
        required: true
    },
    teamOneFlag: {
        type: String,
        required: false
    },
    teamTwoFlag: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    autoQuestion: {
        type: Boolean,
        required: true
    }
});

MatchSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Match", MatchSchema);