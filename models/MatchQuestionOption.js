// const { mongoose, Schema } = require('mongoose');
// const MatchQuestion = require('./MatchQuestion');
// const MatchQuestionOptionSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//       },
//       question: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref:MatchQuestion,
//         required: false
//       },
//       betRate: {
//         type: Number,
//         required: true
//       },
//       betLimit: {
//         type: Number,
//         required: false
//       },
//       status: {
//         type: String,
//         required: true,
//         default: 'active'
//       },
//       isWin: {
//         type: Boolean,
//         required: true,
//         default: false
//       },
//       isLoss: {
//         type: Boolean,
//         required: true,
//         default: false
//       }
// },{ timestamps: true });
// module.exports = mongoose.model("MatchQuestionOption", MatchQuestionOptionSchema);