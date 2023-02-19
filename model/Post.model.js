const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: String,
    body: String,
    userID:String,
});

const postModel = mongoose.model("note", PostSchema);

module.exports = { postModel };
