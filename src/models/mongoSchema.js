const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  whatsApp: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  sobre: {
    type: String,
    required: true,
  },
  create_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
