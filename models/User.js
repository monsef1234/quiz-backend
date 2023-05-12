const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  category: { type: String },
  point: { type: String },
  date: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
