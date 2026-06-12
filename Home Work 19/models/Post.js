const mongoose = require("mongoose");
const commentSchema = require("./Comment");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,

  // Reference
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  // Embedded
  comments: [commentSchema],
});

module.exports = mongoose.model("Post", postSchema);
