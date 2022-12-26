const {mongoose, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:false,
        index: false
    },

},
    { timestamps: true });

GameSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Game", GameSchema);