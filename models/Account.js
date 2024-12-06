const { model, Schema, default: mongoose } = require("mongoose");

const AccountSchema = new mongoose.Schema({
  username: String,
  funds: Number,
});

module.exports = model("Account", AccountSchema);
