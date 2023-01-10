const { mongoose, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const MatchQuestionOption = require("./MatchQuestionOption");
const MatchQuestionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "active",
    },
    options: [
      {
        title: {
          type: String,
          required: true,
        },
        betRate: {
          type: Number,
          required: true,
        },
        betLimit: {
          type: Number,
          required: false,
        },
        status: {
          type: String,
          required: true,
          default: "active",
        },
        isWin: {
          type: Boolean,
          required: true,
          default: false,
        },
        isLoss: {
          type: Boolean,
          required: true,
          default: false,
        }
      }
    ]
  },
  { timestamps: true }
);

MatchQuestionSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("MatchQuestion", MatchQuestionSchema);
