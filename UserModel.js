const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema(
    {

        name: Schema.Types.String,
        age: Schema.Types.Number,
        favFood: [Schema.Types.String]

    },

);
exports.User = mongoose.model("users", User);