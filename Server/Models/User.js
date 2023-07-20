const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobileno: { type: Number, required: true, unique: true },
  friends: { type: [{
    _id: Schema.Types.ObjectId,
    name: String
  }] },
  balance: { type: Number },
  expenses: { type: [
    {
      user: {
        _id: Schema.Types.ObjectId,
        name: String
      },
      amount: Number
    }
  ] },
  owe: { type: Number },
  owed: { type: Number },
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
