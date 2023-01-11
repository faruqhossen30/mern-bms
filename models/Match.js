const { mongoose, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const MatchQuestion = require("./MatchQuestion");
const MatchSchema = new mongoose.Schema({
  teamOne: {
    type: String,
    required: true,
  },
  teamTwo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  teamOneFlag: {
    type: String,
    required: false,
  },
  teamTwoFlag: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  autoQuestion: {
    type: Boolean,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
  questions: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: MatchQuestion,
    required: false,
  },
});

MatchSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Match", MatchSchema);
