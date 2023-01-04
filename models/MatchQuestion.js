const { mongoose, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const MatchQuestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'active'
    }
});

MatchQuestionSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("MatchQuestion", MatchQuestionSchema);